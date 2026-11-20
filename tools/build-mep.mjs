// Redes MEP del Piso 2 (1001_Hotel_la_fotona_redes.rvt), exportadas por el otro flujo a
// C:/Users/aleja/Documents/BACO-OBRA/build/mep_p2.json en el marco de HLF_P2-P6 (m, Z arriba).
// Se pasan por la misma alineación ENU y el mismo centro que tools/build-niveles.mjs.
// Salida: public/data/mep.bin + mep.json (cats con vOff/vLen/tOff/tLen, como los niveles).
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.argv[2] || 'C:/Users/aleja/Documents/BACO-OBRA/build/mep_p2.json';
const ALI = 'C:/Users/aleja/HLF/build/revit/alineacion.json';
const man = JSON.parse(fs.readFileSync('public/data/manifest.json', 'utf8'));
const A = JSON.parse(fs.readFileSync(ALI, 'utf8'));
const TH = (A.th * Math.PI) / 180, CT = Math.cos(TH), ST = Math.sin(TH);
const SC = 1.000614, AA = (0.0849 * Math.PI) / 180, CA = Math.cos(AA), SA = Math.sin(AA);
const { e: CE, n: CN } = man.enu;
const web = (rx, ry, rz) => {
  const X = (rx - A.rx) * CT - (ry - A.ry) * ST, Y = (rx - A.rx) * ST + (ry - A.ry) * CT;
  const mx = X + A.cx, my = Y + A.cy;
  const e = (mx * CA - my * SA) * SC, n = (mx * SA + my * CA) * SC;
  return [e - CE, rz, -(n - CN)];
};

const src = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const orden = ['af', 'acs', 'san', 'otras', 'sanitarios', 'rci', 'conduit', 'aparatos', 'luminarias', 'ductos'];
const parts = []; const cats = []; let off = 0; let tris = 0;
for (const nombre of orden) {
  const g = src.grupos[nombre];
  if (!g || !g.T.length) continue;
  const map = new Map(); const V = []; const T = new Uint32Array(g.T.length);
  const idx = (i) => { // suelda vértices repetidos (Revit triangula cara por cara)
    const x = g.V[i * 3], y = g.V[i * 3 + 1], z = g.V[i * 3 + 2];
    const k = `${Math.round(x * 500)},${Math.round(y * 500)},${Math.round(z * 500)}`;
    let v = map.get(k);
    if (v === undefined) { v = V.length / 3; map.set(k, v); V.push(...web(x, y, z)); }
    return v;
  };
  let n = 0;
  for (let t = 0; t < g.T.length; t += 3) {
    const a = idx(g.T[t]), b = idx(g.T[t + 1]), c = idx(g.T[t + 2]);
    if (a === b || b === c || a === c) continue;
    T[n++] = a; T[n++] = b; T[n++] = c;
  }
  const Vf = new Float32Array(V); const Tt = T.slice(0, n);
  cats.push({ nombre, vOff: off, vLen: Vf.length, tOff: off + Vf.byteLength, tLen: Tt.length, elementos: g.n });
  parts.push(Buffer.from(Vf.buffer), Buffer.from(Tt.buffer));
  off += Vf.byteLength + Tt.byteLength; tris += n / 3;
  console.log(nombre.padEnd(11), String(g.n).padStart(5), 'elem', String(n / 3).padStart(8), 'tris');
}
fs.writeFileSync(path.join('public/data', 'mep.bin'), Buffer.concat(parts));
fs.writeFileSync(path.join('public/data', 'mep.json'), JSON.stringify({ fuente: src.fuente, nivel: 'PISO 2', archivo: 'mep.bin', cats }, null, 1));
console.log('total', tris, 'tris', (off / 1e6).toFixed(1), 'MB');
