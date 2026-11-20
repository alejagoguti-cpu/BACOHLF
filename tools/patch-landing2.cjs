// Segunda parte del parche (con reemplazo por función: sin patrones especiales de $).
const fs = require('fs');
let s = fs.readFileSync('src/main.ts', 'utf8');
const r = (a, b) => { const i = s.lastIndexOf(a); if (i < 0) throw new Error('no: ' + a.slice(0, 60)); s = s.slice(0, i) + b + s.slice(i + a.length); };
r("  $('#cargando').classList.add('fin');", `  $('#cargando').classList.add('fin');
  gsap.from('.titulo .w', { yPercent: 110, opacity: 0, stagger: 0.14, duration: 1.4, ease: 'power3.out', delay: 0.3 });
  gsap.from('.hero-der', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 });`);
r("etiqueta('HLF P2–P6 · modelo Revit',", "etiqueta('Torre Suites · ver en 3D',");
fs.writeFileSync('src/main.ts', s);
console.log('ok', (s.match(/'\$' \+/g) || []).length, 'cadenas $ intactas');
