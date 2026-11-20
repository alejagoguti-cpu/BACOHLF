// Convierte la exportación real de Revit (HLF_P2-P6.rvt, un JSON por nivel con
// geometría por categoría) en binarios compactos para la web.
// Entrada: ../../HLF/build/revit/nivel_*.json  (V = xyz en metros, Z arriba; T = índices)
// Salida:  public/data/nivel_<i>.bin + public/data/manifest.json
// Ejes web: Y arriba  ->  (x, z, -y), centrado en la huella del edificio.
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.argv[2] || 'C:/Users/aleja/HLF/build/revit';
const OUT = 'public/data';
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter((f) => /^nivel_\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.slice(6)) - parseInt(b.slice(6)));
const niveles = files.map((f) => JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8')));

// Centro en planta (de todo el edificio)
let mnx = Infinity, mny = Infinity, mxx = -Infinity, mxy = -Infinity;
for (const n of niveles) for (const c of Object.values(n.cats)) for (let i = 0; i < c.V.length; i += 3) {
  const x = c.V[i], y = c.V[i + 1];
  if (x < mnx) mnx = x; if (x > mxx) mxx = x; if (y < mny) mny = y; if (y > mxy) mxy = y;
}
const cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;

const manifest = { fuente: 'HLF_P2-P6.rvt (export por nivel)', origen: [cx, cy], extension: [mxx - mnx, mxy - mny], niveles: [] };
niveles.forEach((n, i) => {
  const parts = []; const cats = []; let off = 0; let zmin = Infinity, zmax = -Infinity;
  for (const [nombre, c] of Object.entries(n.cats)) {
    const V = new Float32Array(c.V.length);
    for (let k = 0; k < c.V.length; k += 3) {
      const z = c.V[k + 2];
      if (z < zmin) zmin = z; if (z > zmax) zmax = z;
      V[k] = c.V[k] - cx; V[k + 1] = z; V[k + 2] = -(c.V[k + 1] - cy);
    }
    const T = new Uint32Array(c.T);
    cats.push({ nombre, vOff: off, vLen: V.length, tOff: off + V.byteLength, tLen: T.length });
    parts.push(Buffer.from(V.buffer), Buffer.from(T.buffer));
    off += V.byteLength + T.byteLength;
  }
  fs.writeFileSync(path.join(OUT, `nivel_${i}.bin`), Buffer.concat(parts));
  manifest.niveles.push({ i, nombre: n.nivel, elev: n.elev_m, zmin, zmax, archivo: `nivel_${i}.bin`, cats });
  console.log(n.nivel, cats.map((c) => c.nombre).join(','), (off / 1e6).toFixed(2) + ' MB');
});
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));
