// Parche puntual de src/main.ts para la versión landing interactiva (se ejecuta una vez).
const fs = require('fs');
let s = fs.readFileSync('src/main.ts', 'utf8').replace(/\r\n/g, '\n');
const r = (a, b) => { if (!s.includes(a)) throw new Error('no encontrado: ' + a.slice(0, 80)); s = s.replace(a, b); };

// paleta planosfinales
r("const PAPEL = new THREE.Color('#fbfbfa');", "const PAPEL = new THREE.Color('#f7f4ef');");
r("const niebla = new THREE.Fog('#fbfbfa', 280, 1100);", "const niebla = new THREE.Fog('#f7f4ef', 280, 1100);");
r("const ACENTO = new THREE.Color('#b79e66');", "const ACENTO = new THREE.Color('#b59535');");
r("n.lineas.color.set('#8f9daa').lerp(new THREE.Color('#2f3a45'), st.tinta)", "n.lineas.color.set('#6a7d99').lerp(new THREE.Color('#0e3064'), st.tinta)");
r("muros:      { arq: '#ffffff',", "muros:      { arq: '#dcae95',");

// estado de las interacciones del usuario (no lo toca la timeline)
r("type Estado = typeof S;", `type Estado = typeof S;
/** Interacciones dentro del recorrido: se suman al estado de la timeline sin romper el scrub. */
const U = { corteExtra: 0, planoNivel: -1, px: 0, py: 0, tpx: 0, tpy: 0 };`);

// cuadro: estado derivado + paralaje con el mouse
r(`  aplicar(S);
  if (modo === 'cine') camaraDesde(S);`, `  const E = { ...S };
  if (modo === 'cine') {
    if (E.corteY < 500) E.corteY += U.corteExtra;
    if (escenaActual === 6 && U.planoNivel >= 0) { const n = niveles[U.planoNivel]; E.verHasta = U.planoNivel; E.corteY = n.info.elev + 1.6; E.ty = n.info.elev; }
    U.px += (U.tpx - U.px) * 0.05; U.py += (U.tpy - U.py) * 0.05;
    E.az += U.px * 7 * (1 - E.orto); E.el = THREE.MathUtils.clamp(E.el - U.py * 3 * (1 - E.orto), 2, 89.6);
  }
  aplicar(E);
  if (modo === 'cine') camaraDesde(E);`);

// timeline: hero con palabras, velo, contadores, escena 09
r("  tl.to('.titulo', { xPercent: -38, opacity: 0.25, duration: 3.5 }, 2.5);",
`  tl.to('.titulo .w', { yPercent: -70, opacity: 0, stagger: 0.5, duration: 3 }, 3);
  tl.to('.hero-der', { y: -60, opacity: 0, duration: 2.5 }, 2.5);
  tl.to('#velo', { opacity: 0, duration: 4 }, 4);
  const total = new THREE.Box3(); niveles.forEach((n) => total.union(n.caja));
  const cnt = { niveles: 0, altura: 0, cats: 0 };
  const nCats = new Set(niveles.flatMap((n) => [...n.mats.keys()])).size;
  const pintarCnt = () => {
    document.querySelector('[data-cnt="niveles"]')!.textContent = String(Math.round(cnt.niveles));
    document.querySelector('[data-cnt="altura"]')!.textContent = cnt.altura.toFixed(1).replace('.', ',');
    document.querySelector('[data-cnt="cats"]')!.textContent = String(Math.round(cnt.cats));
  };
  tl.to(cnt, { niveles: niveles.length, altura: total.max.y, cats: nCats, duration: 3, ease: 'power2.out', onUpdate: pintarCnt }, 10.6);`);
r("  T({ az: 140, el: 24, dist: 135 }, 70, 10);", "  T({ az: 140, el: 24, dist: 135 }, 70, 10);\n\n  // 09 · Inversión: el edificio gira despacio detrás del simulador\n  T({ az: 230, el: 32, dist: 170, ty: 12 }, 80, 10);");
r("  const N = 8;", "  const N = 9;");
r("const nombres = ['Emerge', 'Edificación', 'Explosión', 'Interior', 'BIM', 'Plano', 'Remodelación', 'Ruta BACO'];",
  "const nombres = ['Inicio', 'Edificio', 'Niveles', 'Interior', 'BIM', 'Plano', 'Remodelación', 'Ruta', 'Inversión'];");
r("end: () => '+=' + innerHeight * 14,", "end: () => '+=' + innerHeight * 17,");
r(`      escenaActual = Math.min(N, Math.floor(self.progress * N) + 1);`, `      const e = Math.min(N, Math.floor(self.progress * N) + 1);
      if (e !== escenaActual) document.querySelectorAll('#marcas li').forEach((li, i) => li.classList.toggle('on', i === e - 1));
      escenaActual = e;`);
r("  $('#marcas').innerHTML = nombres.map", "  $('#marcas').innerHTML = nombres.map");

// UI de la landing
r(`  $('#etapas').innerHTML = ETAPAS.map(([k, t, d]) => \`<div class="etapa"><b>\${k}</b><strong>\${t}</strong><span>\${d}</span></div>\`).join('');
  $('#notaMep').textContent = 'Redes MEP (eléctrica, hidrosanitaria, RCI): están modeladas en 1001_Hotel_la_fotona_redes.rvt y se incorporarán al exportarlas. Aquí no se simulan.';`,
`  landing();`);

r("// ───────────────────────── bucle ─────────────────────────", `// ───────────────────────── landing: interacciones dentro del recorrido ─────────────────────────
/** Entregables y honorarios por etapa: Propuesta comercial BACO Studio v03 (9 nov 2026). */
const DET: Record<string, string> = {
  '00': '<b>Proveedor de escaneo</b> (contratado por el propietario): levantamiento 3D y modelo de condiciones existentes LOD 300. BACO revisa coordenadas, consistencia y zonas no verificadas.',
  A: '<b>$33 M</b> · BEP marco y operativo, EIR/AIR, protocolo CDE, matriz LOD 400, anexos y evaluación BIM de proponentes.',
  B: '<b>$47 M</b> · Modelo federado por hito, reportes de interferencias, minutas y registro de incidencias.',
  C: '<b>$184 M</b> independiente · <b>$110,4 M</b> con equipo de construcción BACO · Informes BIM mensuales, control de versiones, registro de RFI y cambios.',
  D: '<b>$31 M</b> · Federado as-built, planos récord por especialidad, inventario de equipos y paquete de activos digitales.',
};
function irAEscena(e: number) {
  const N = 9; const y = st.start + (st.end - st.start) * ((e - 1 + 0.55) / N);
  window.scrollTo({ top: y, behavior: 'smooth' });
}
function landing() {
  addEventListener('pointermove', (ev) => { if (modo === 'cine') { U.tpx = ev.clientX / innerWidth - 0.5; U.tpy = ev.clientY / innerHeight - 0.5; } });
  document.querySelectorAll<HTMLElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => irAEscena(+b.dataset.ir!)));
  $('#marcas').addEventListener('click', (e) => { const li = (e.target as HTMLElement).closest('li'); if (li) irAEscena([...li.parentElement!.children].indexOf(li) + 1); });
  // 03 · niveles
  $('#chipsNiveles').innerHTML = niveles.map((n, i) => \`<button class="chip" data-n="\${i}">\${n.info.nombre}</button>\`).join('');
  $('#chipsNiveles').addEventListener('mouseover', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) S.sel = +b.dataset.n!; });
  $('#chipsNiveles').addEventListener('mouseleave', () => { S.sel = -1; });
  $('#chipsNiveles').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) entrarLibre(+b.dataset.n!); });
  // 04 · altura de corte
  const rc = $<HTMLInputElement>('#rCorte');
  rc.addEventListener('input', () => { const v = +rc.value; U.corteExtra = v - 1.6; $('#vCorte').textContent = v.toFixed(2).replace('.', ',') + ' m'; });
  // 05 · disciplinas
  const pintarDisc = () => {
    $('#chipsDisc').innerHTML = (['Arquitectura', 'Estructura'] as Disc[]).map((d) => {
      const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
      return \`<button class="chip \${on ? 'on' : ''}" data-d="\${d}">\${d}</button>\`;
    }).join('') + MEP.map((m) => \`<button class="chip" disabled title="Modelado en 1001_Hotel_la_fotona_redes.rvt; falta exportarlo a la web">\${m.split(' (')[0]}<small>pendiente</small></button>\`).join('');
  };
  pintarDisc();
  $('#chipsDisc').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (!b?.dataset.d) return;
    const cats = Object.entries(CATS).filter(([, v]) => v.disc === b.dataset.d).map(([c]) => c);
    const on = cats.some((c) => catsVisibles.has(c));
    cats.forEach((c) => on ? catsVisibles.delete(c) : catsVisibles.add(c));
    pintarDisc();
  });
  // 06 · planta por nivel
  const conPlanta = niveles.map((n, i) => ({ n, i })).filter(({ n }) => n.mats.has('muros') && n.info.nombre !== 'PISO 1');
  const p2 = niveles.findIndex((n) => n.info.nombre === 'PISO 2');
  const pintarPlano = () => { $('#chipsPlano').innerHTML = conPlanta.map(({ n, i }) => \`<button class="chip \${(U.planoNivel < 0 ? p2 : U.planoNivel) === i ? 'on' : ''}" data-n="\${i}">\${n.info.nombre}</button>\`).join(''); };
  pintarPlano();
  $('#chipsPlano').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (!b) return; U.planoNivel = +b.dataset.n!; pintarPlano(); });
  // 08 · etapas
  const pintarEtapa = (k: string) => {
    document.querySelectorAll('.etapa').forEach((el) => el.classList.toggle('on', (el as HTMLElement).dataset.k === k));
    const det = $('#etapaDet'); det.innerHTML = DET[k];
    gsap.fromTo(det, { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' });
  };
  $('#etapas').innerHTML = ETAPAS.map(([k, t, d]) => \`<button class="etapa" data-k="\${k}"><b>\${k}</b><strong>\${t}</strong><span>\${d}</span></button>\`).join('');
  $('#etapas').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.etapa'); if (b) pintarEtapa(b.dataset.k!); });
  pintarEtapa('A');
  // 09 · simulador (fórmula de la propuesta)
  let integrada = false;
  const M = (v: number) => '$' + v.toLocaleString('es-CO', { maximumFractionDigits: 1 }) + ' M';
  const vis = { total: 0, iva: 0, eq: 0 };
  const calc = () => {
    const meses = +$<HTMLInputElement>('#rMeses').value, obra = +$<HTMLInputElement>('#rObra').value;
    $('#vMeses').textContent = meses + ' meses'; $('#vObra').textContent = '$' + obra.toLocaleString('es-CO') + ' M';
    const total = 111 + meses * (integrada ? 13.8 : 23);
    gsap.to(vis, { total, iva: total * 1.19, eq: (100 * total) / obra, duration: 0.6, ease: 'power2.out', onUpdate: () => {
      $('#oTotal').textContent = M(Math.round(vis.total * 10) / 10);
      $('#oIva').textContent = M(Math.round(vis.iva * 10) / 10);
      $('#oEq').textContent = vis.eq.toFixed(2).replace('.', ',') + ' %';
    } });
  };
  $('#rMeses').addEventListener('input', calc); $('#rObra').addEventListener('input', calc);
  $('#segModo').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b) return;
    integrada = b.dataset.m === 'int';
    document.querySelectorAll('#segModo button').forEach((x) => x.classList.toggle('on', x === b)); calc();
  });
  calc();
}

// ───────────────────────── bucle ─────────────────────────`);

// entrada del hero al terminar la carga
r("  $('#cargando').classList.add('fin');", `  $('#cargando').classList.add('fin');
  gsap.from('.titulo .w', { yPercent: 110, opacity: 0, stagger: 0.14, duration: 1.4, ease: 'power3.out', delay: 0.3 });
  gsap.from('.hero-der', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 });`);
// la etiqueta del edificio
r("etiqueta('HLF P2–P6 · modelo Revit',", "etiqueta('Torre Suites · ver en 3D',");

fs.writeFileSync('src/main.ts', s);
console.log('ok');
