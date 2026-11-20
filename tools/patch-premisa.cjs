// Reescritura del recorrido con la premisa "construir antes de construir". Reemplazos por marcadores (sin patrones $).
const fs = require('fs');
const F = (n) => fs.readFileSync('tools/frag/' + n, 'utf8');
let s = fs.readFileSync('src/main.ts', 'utf8').replace(/\r\n/g, '\n');
const entre = (a, b, nuevo, incluirB = false) => {
  const i = s.indexOf(a); const j = s.indexOf(b, i + a.length);
  if (i < 0 || j < 0) throw new Error('marcador: ' + a.slice(0, 50) + ' … ' + b.slice(0, 40));
  s = s.slice(0, i) + nuevo + s.slice(incluirB ? j + b.length : j);
};
const r = (a, b) => { const i = s.indexOf(a); if (i < 0) throw new Error('no: ' + a.slice(0, 70)); s = s.slice(0, i) + b + s.slice(i + a.length); };

entre('const S = {', 'type Estado = typeof S;', F('estado.ts'));
entre('// ───────────────────────── aplicar estado ─────────────────────────', 'const objetivo = new THREE.Vector3();', F('aplicar.ts') + '\n');
entre('// ───────────────────────── recorrido (MODO A) ─────────────────────────', '// ───────────────────────── exploración libre (MODO B) ─────────────────────────', F('recorrido.ts') + '\n');
entre('// ───────────────────────── landing: interacciones dentro del recorrido ─────────────────────────', '// ───────────────────────── bucle ─────────────────────────', F('landing.ts'));

r('  await cargarMep();\n', '  await cargarMep();\n  crearNubes();\n  buscarPuntoCritico();\n');
r(`    if (E.corteY < 500) E.corteY += U.corteExtra;
    if (escenaActual === 6 && U.planoNivel >= 0) { const n = niveles[U.planoNivel]; E.verHasta = U.planoNivel; E.corteY = n.info.elev + 1.6; E.ty = n.info.elev; }
`, '');
r('  aplicar(E);\n', '  aplicar(E);\n  if (modo === \'cine\') pintarHud();\n');
entre('  // etiquetas: edificio (escena 02) y niveles (escena 03 / exploración)', '  construirRecorrido();',
  `  // etiqueta anclada al punto crítico real del modelo de redes
  const wp = new THREE.Vector3();
  etiqueta('Punto crítico · RCI ↔ conduit', () => (marcaCritico ? marcaCritico.getWorldPosition(wp).add(new THREE.Vector3(0, 0.9, 0)) : wp),
    () => (modo === 'cine' && marcaCritico ? S.alerta : 0), () => entrarLibre(niveles.findIndex((n) => n.info.nombre === 'PISO 2')));
`);
r("document.querySelector('[data-arriba]')?.addEventListener('click', () => irAEscena(1));", "document.querySelector('[data-arriba]')?.addEventListener('click', () => irAFase(1));");
r(`    if (escenaActual === 2) entrarLibre();
    else if (escenaActual === 3) entrarLibre(i);`, `    if (escenaActual === 4) entrarLibre(i); else if (escenaActual > 1) entrarLibre();`);
r('const activo = modo === \'libre\' || escenaActual === 2 || escenaActual === 3;', 'const activo = modo === \'libre\' || escenaActual > 1;');
r('if (modo === \'cine\' && escenaActual === 3) S.sel = h ? h.object.userData.nivel : -1;', 'if (modo === \'cine\' && escenaActual === 4) S.sel = h ? h.object.userData.nivel : -1;');
r('  gsap.to(S, { orto: 0, duration: 0.8 });', '  gsap.to(S, { orto: 0, nube: 0, noche: 0, obra: 1, dibujo: 1, alerta: 0, shift: 0, duration: 0.8 });');
fs.writeFileSync('src/main.ts', s);
console.log('ok');
