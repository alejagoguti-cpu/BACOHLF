// Convierte la exportación real de Revit (HLF_P2-P6.rvt, un JSON por nivel con
// geometría por categoría) en binarios compactos para la web.
// Entrada: C:/Users/aleja/HLF/build/revit/nivel_*.json  (V = xyz Revit en m, Z arriba; T = índices)
// Alineación: la misma del visor HLF (build/revit/alineacion.json) → coordenadas ENU del sitio,
// para que el contexto (terreno, vías, vecinos, resto del hotel) encaje sin tocarlo.
// Salida: public/data/nivel_<i>.bin + manifest.json
//   ejes web: x = Este, y = arriba, z = -Norte; origen = centro de la caja del Revit, y = cota Revit 0.
// Muros y cubiertas se des-indexan y llevan UV reales (m): muros por cara (horizontal × altura),
// cubiertas según la pendiente (para que la teja baje por el faldón).
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.argv[2] || 'C:/Users/aleja/HLF/build/revit';
const OUT = 'public/data';
fs.mkdirSync(OUT, { recursive: true });

const A = JSON.parse(fs.readFileSync(path.join(SRC, 'alineacion.json'), 'utf8'));
const TH = (A.th * Math.PI) / 180, CT = Math.cos(TH), ST = Math.sin(TH);
const SC = 1.000614, AA = (0.0849 * Math.PI) / 180, CA = Math.cos(AA), SA = Math.sin(AA); // igual que HLF/tools/build-revit.mjs
const toEnu = (rx, ry) => {
  const X = (rx - A.rx) * CT - (ry - A.ry) * ST, Y = (rx - A.rx) * ST + (ry - A.ry) * CT;
  const mx = X + A.cx, my = Y + A.cy;
  return [(mx * CA - my * SA) * SC, (mx * SA + my * CA) * SC];
};

const files = fs.readdirSync(SRC).filter((f) => /^nivel_\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.slice(6)) - parseInt(b.slice(6)));
const niveles = files.map((f) => JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8')));
delete niveles[0].cats.losas; // placa de contrapiso del primer piso (la plazoleta real viene del contexto)

// centro ENU de todo el Revit
let mnE = Infinity, mnN = Infinity, mxE = -Infinity, mxN = -Infinity;
for (const n of niveles) for (const c of Object.values(n.cats)) for (let i = 0; i < c.V.length; i += 3) {
  const [e, no] = toEnu(c.V[i], c.V[i + 1]);
  mnE = Math.min(mnE, e); mxE = Math.max(mxE, e); mnN = Math.min(mnN, no); mxN = Math.max(mxN, no);
}
const CE = (mnE + mxE) / 2, CN = (mnN + mxN) / 2;
const web = (x, y, z) => { const [e, n] = toEnu(x, y); return [e - CE, z, -(n - CN)]; };

const CON_UV = new Set(['muros', 'cubiertas']);
const manifest = { fuente: 'HLF_P2-P6.rvt (export por nivel)', enu: { e: CE, n: CN, z: A.z }, extension: [mxE - mnE, mxN - mnN], niveles: [] };

niveles.forEach((nv, i) => {
  const parts = []; const cats = []; let off = 0; let zmin = Infinity, zmax = -Infinity;
  const push = (arr) => { const b = Buffer.from(arr.buffer); const o = off; parts.push(b); off += b.byteLength; return o; };
  for (const [nombre, c] of Object.entries(nv.cats)) {
    const W = new Float32Array(c.V.length);
    for (let k = 0; k < c.V.length; k += 3) {
      const p = web(c.V[k], c.V[k + 1], c.V[k + 2]);
      W.set(p, k); zmin = Math.min(zmin, p[1]); zmax = Math.max(zmax, p[1]);
    }
    if (!CON_UV.has(nombre)) {
      const T = new Uint32Array(c.T);
      const vOff = push(W), tOff = push(T);
      cats.push({ nombre, vOff, vLen: W.length, tOff, tLen: T.length });
      continue;
    }
    // des-indexado + UV por triángulo
    const nT = c.T.length; const P = new Float32Array(nT * 3); const UV = new Float32Array(nT * 2);
    for (let t = 0; t < nT; t += 3) {
      const a = c.T[t] * 3, b = c.T[t + 1] * 3, d = c.T[t + 2] * 3;
      const ax = W[a], ay = W[a + 1], az = W[a + 2];
      const ux = W[b] - ax, uy = W[b + 1] - ay, uz = W[b + 2] - az, vx = W[d] - ax, vy = W[d + 1] - ay, vz = W[d + 2] - az;
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const L = Math.hypot(nx, ny, nz) || 1; nx /= L; ny /= L; nz /= L;
      for (let k = 0; k < 3; k++) {
        const q = c.T[t + k] * 3; const x = W[q], y = W[q + 1], z = W[q + 2];
        P.set([x, y, z], (t + k) * 3);
        let u, v;
        if (nombre === 'muros') {
          if (Math.abs(ny) > 0.7) { u = x; v = z; } // coronación / cara horizontal
          else { const hl = Math.hypot(nx, nz) || 1; u = (x * -nz + z * nx) / hl; v = y; } // a lo largo del muro × altura
        } else { // cubiertas: v = línea de máxima pendiente (proyectada), u = horizontal
          const hl = Math.hypot(nx, nz);
          if (hl < 0.05) { u = x; v = z; } else { const dx = nx / hl, dz = nz / hl; u = x * -dz + z * dx; v = (x * dx + z * dz) / Math.max(Math.abs(ny), 0.35); }
        }
        UV[(t + k) * 2] = u; UV[(t + k) * 2 + 1] = v;
      }
    }
    const vOff = push(P), uvOff = push(UV);
    cats.push({ nombre, vOff, vLen: P.length, uvOff, uvLen: UV.length });
  }
  fs.writeFileSync(path.join(OUT, `nivel_${i}.bin`), Buffer.concat(parts));
  manifest.niveles.push({ i, nombre: nv.nivel, elev: nv.elev_m, zmin, zmax, archivo: `nivel_${i}.bin`, cats });
  console.log(nv.nivel, cats.map((c) => c.nombre + (c.uvOff !== undefined ? '(uv)' : '')).join(','), (off / 1e6).toFixed(2) + ' MB');
});
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log('centro ENU', CE.toFixed(2), CN.toFixed(2), 'cota', A.z);
