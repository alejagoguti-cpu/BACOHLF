// HTML de la premisa: tarjetas por fase + tablero en vivo; simulador a la sección de inversión; fuera #datos y #conflicto.
const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8').replace(/\r\n/g, '\n');
const corta = (a, b, nuevo) => { const i = h.indexOf(a), j = h.indexOf(b, i); if (i < 0 || j < 0) throw new Error('marcador ' + a.slice(0, 40)); h = h.slice(0, i) + nuevo + h.slice(j); };
// simulador actual (dentro de la escena 9) se reutiliza en la sección de inversión
const s0 = h.indexOf('<div class="sim">'), s1 = h.indexOf('<p class="fuente">Fórmula', s0); const fin = h.indexOf('</p>', s1) + 4;
const sim = h.slice(s0, fin);
corta('<div class="hud">', '<div id="progreso">', fs.readFileSync('tools/frag/hud.html', 'utf8') + '    ');
corta('<!-- II · EL MODELO EN DATOS (real) -->', '<!-- III · CONTROL DE GESTIÓN (ilustrativo) -->', '');
// inversión: simulador en lugar de las barras/curva
corta('<div class="inv">', '<!-- IV · PRÓXIMOS PASOS -->', `<div class="inv-sim reveal">${sim}</div>
    </div>
  </section>

  `);
h = h.replace('<p class="nota reveal">Valores en millones de COP, antes de IVA · escenario base de 8 meses de obra · Propuesta v03.</p>',
  '<p class="nota reveal">Mueve la duración de la obra, cambia la modalidad y el presupuesto: los valores salen de la fórmula de la propuesta v03 (millones de COP).</p>');
fs.writeFileSync('index.html', h);
console.log('ok', h.includes('id="hudObra"'), h.includes('id="rMeses"'), !h.includes('id="datos"'), !h.includes('id="conflicto"'));
