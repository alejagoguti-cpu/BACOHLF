// Integra las redes MEP reales (public/data/mep.*) en src/main.ts. Reemplazos sin patrones $.
const fs = require('fs');
let s = fs.readFileSync('src/main.ts', 'utf8').replace(/\r\n/g, '\n');
const r = (a, b) => { const i = s.indexOf(a); if (i < 0) throw new Error('no: ' + a.slice(0, 70)); s = s.slice(0, i) + b + s.slice(i + a.length); };

r("type Disc = 'Arquitectura' | 'Estructura';", "type Disc = 'Arquitectura' | 'Estructura' | 'Hidrosanitaria' | 'Red contra incendios' | 'Eléctrica' | 'Mecánica';\nconst DISCS: Disc[] = ['Arquitectura', 'Estructura', 'Hidrosanitaria', 'Red contra incendios', 'Eléctrica', 'Mecánica'];");
r("const CATS: Record<string, { arq: string; tec: string; disc: Disc; cerr?: boolean; vidrio?: boolean; metal?: number; rough?: number; nombre: string }> = {",
  "const CATS: Record<string, { arq: string; tec: string; disc: Disc; cerr?: boolean; vidrio?: boolean; metal?: number; rough?: number; nombre: string; mep?: boolean }> = {");
r("  vigas:      { arq: '#c8c3b9', tec: '#cfd8e2', disc: 'Estructura', nombre: 'Vigas' },\n};",
`  vigas:      { arq: '#c8c3b9', tec: '#cfd8e2', disc: 'Estructura', nombre: 'Vigas' },
  // redes del Piso 2 (1001_Hotel_la_fotona_redes.rvt) · colores de las láminas técnicas
  af:         { arq: '#1f6fd1', tec: '#1f6fd1', disc: 'Hidrosanitaria', mep: true, rough: .45, nombre: 'Agua fría' },
  acs:        { arq: '#d23b2f', tec: '#d23b2f', disc: 'Hidrosanitaria', mep: true, rough: .45, nombre: 'Agua caliente' },
  san:        { arq: '#8a5a32', tec: '#8a5a32', disc: 'Hidrosanitaria', mep: true, rough: .6, nombre: 'Sanitaria' },
  sanitarios: { arq: '#f4f4f2', tec: '#f4f4f2', disc: 'Hidrosanitaria', mep: true, rough: .25, nombre: 'Aparatos sanitarios' },
  otras:      { arq: '#8b8f96', tec: '#8b8f96', disc: 'Hidrosanitaria', mep: true, nombre: 'Otras tuberías' },
  rci:        { arq: '#e8731a', tec: '#e8731a', disc: 'Red contra incendios', mep: true, rough: .45, nombre: 'Rociadores y red RCI' },
  conduit:    { arq: '#2a9d8f', tec: '#2a9d8f', disc: 'Eléctrica', mep: true, rough: .5, nombre: 'Conduit' },
  aparatos:   { arq: '#0e3064', tec: '#0e3064', disc: 'Eléctrica', mep: true, nombre: 'Tomas y aparatos' },
  luminarias: { arq: '#f2c230', tec: '#f2c230', disc: 'Eléctrica', mep: true, nombre: 'Luminarias' },
  ductos:     { arq: '#9aa3ad', tec: '#9aa3ad', disc: 'Mecánica', mep: true, metal: .5, rough: .4, nombre: 'Ductos' },
};`);
r("/** Disciplinas MEP: existen en 1001_Hotel_la_fotona_redes.rvt pero aún no se han exportado a la web. */\nconst MEP = ['Eléctrica', 'Hidrosanitaria (AF / ACS / SAN)', 'Red contra incendios'];\n", '');

// estado: revelado de redes
r("  shift: 0,", "  shift: 0,\n  mep: 0,        // 0 redes ocultas → 1 redes MEP visibles");

// aplicar: las redes dependen de st.mep; se ven a través de los cerramientos
r("      if (def.cerr) op *= THREE.MathUtils.lerp(1, def.vidrio ? 0.25 : 0.14, st.cerr);",
  "      if (def.cerr) op *= THREE.MathUtils.lerp(1, def.vidrio ? 0.25 : 0.14, st.cerr);\n      if (def.mep) op *= st.mep;");
r("      m.visible = catsVisibles.has(cat);", "      m.visible = catsVisibles.has(cat) && (!def.mep || st.mep > 0.01);");

// carga de las redes dentro del grupo del Piso 2
r("  niveles.forEach((n, i) => n.grupo.children.forEach((o) => {", `  await cargarMep();
  niveles.forEach((n, i) => n.grupo.children.forEach((o) => {`);
r("// ───────────────────────── carga ─────────────────────────", `// ───────────────────────── redes MEP (Piso 2) ─────────────────────────
let mepInfo: { fuente: string; cats: (Cat & { elementos: number })[] } | null = null;
async function cargarMep() {
  const p2 = niveles.find((n) => n.info.nombre === 'PISO 2'); if (!p2) return;
  try { mepInfo = await (await fetch('data/mep.json')).json(); } catch { return; }
  const buf = await (await fetch('data/mep.bin')).arrayBuffer();
  for (const c of mepInfo!.cats) {
    const def = CATS[c.nombre]; if (!def) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf, c.vOff, c.vLen), 3));
    g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, c.tOff!, c.tLen!), 1));
    g.computeVertexNormals();
    const m = new THREE.MeshStandardMaterial({ color: def.arq, roughness: def.rough ?? 0.6, metalness: def.metal ?? 0.05, clippingPlanes: [corte], transparent: true, opacity: 0 });
    m.userData = { def };
    const mesh = new THREE.Mesh(g, m);
    mesh.name = c.nombre; mesh.castShadow = false; mesh.receiveShadow = false; mesh.renderOrder = 2;
    mesh.userData = { cat: c.nombre, tris: c.tLen! / 3, elementos: c.elementos, mep: true };
    p2.grupo.add(mesh); p2.mats.set(c.nombre, m);
  }
}

// ───────────────────────── carga ─────────────────────────`);

// timeline escena 05: las redes aparecen al final (80–100 %) y se van en la planta
r("  T({ cerr: 1 }, 46, 2);", "  T({ cerr: 1 }, 46, 2);\n  T({ mep: 1, dist: 95, ty: 4 }, 47.5, 2.5);");
r("  T({ verHasta: nivelP2, corteY: cut, cerr: 0, ty: elevP2 }, 50, 2);", "  T({ verHasta: nivelP2, corteY: cut, cerr: 0, ty: elevP2, mep: 0 }, 50, 2);");

// vistas en modo libre
r("if (v === 'arq') gsap.to(S, { bim: 0, cerr: 0, bordes: 0, tinta: 0, ctx: 1, duration: 1 });", "if (v === 'arq') gsap.to(S, { bim: 0, cerr: 0, bordes: 0, tinta: 0, ctx: 1, mep: 0, duration: 1 });");
r("if (v === 'bim') gsap.to(S, { bim: 1, cerr: 1, bordes: 0.55, tinta: 0, ctx: 0.3, duration: 1 });", "if (v === 'bim') gsap.to(S, { bim: 1, cerr: 1, bordes: 0.55, tinta: 0, ctx: 0.3, mep: 1, duration: 1 });");

// panel: disciplinas reales
r(`  const discs: Disc[] = ['Arquitectura', 'Estructura'];
  $('#listaDisc').innerHTML = discs.map((d) => {
    const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
    return \`<li data-d="\${d}" class="\${on ? '' : 'off'}">\${d}<small>\${on ? 'visible' : 'oculta'}</small></li>\`;
  }).join('') + MEP.map((m) => \`<li class="nd" title="Pendiente: exportar de 1001_Hotel_la_fotona_redes.rvt">\${m}<small>sin exportar</small></li>\`).join('');`,
`  $('#listaDisc').innerHTML = DISCS.filter((d) => Object.entries(CATS).some(([c, v]) => v.disc === d && niveles.some((n) => n.mats.has(c)))).map((d) => {
    const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
    return \`<li data-d="\${d}" class="\${on ? '' : 'off'}">\${d}<small>\${on ? 'visible' : 'oculta'}</small></li>\`;
  }).join('');`);
// al encender una red en modo libre se revelan las redes
r("    if (!on) gsap.fromTo(S, { bordes: Math.max(S.bordes, 0.8) }, { bordes: S.bim > 0.5 ? 0.55 : 0, duration: 1.4 });",
  "    if (!on && Object.entries(CATS).some(([c, v]) => v.disc === li.dataset.d && v.mep)) gsap.to(S, { mep: 1, cerr: Math.max(S.cerr, 0.8), duration: 1 });");

// chips de la escena 05
r(`    $('#chipsDisc').innerHTML = (['Arquitectura', 'Estructura'] as Disc[]).map((d) => {
      const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
      return \`<button class="chip \${on ? 'on' : ''}" data-d="\${d}">\${d}</button>\`;
    }).join('') + MEP.map((m) => \`<button class="chip" disabled title="Modelado en 1001_Hotel_la_fotona_redes.rvt; falta exportarlo a la web">\${m.split(' (')[0]}<small>pendiente</small></button>\`).join('');`,
`    $('#chipsDisc').innerHTML = DISCS.filter((d) => Object.entries(CATS).some(([c, v]) => v.disc === d && niveles.some((n) => n.mats.has(c)))).map((d) => {
      const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
      const color = Object.values(CATS).find((v) => v.disc === d && v.mep)?.arq;
      return \`<button class="chip \${on ? 'on' : ''}" data-d="\${d}">\${color ? \`<i style="background:\${color}"></i>\` : ''}\${d}</button>\`;
    }).join('');`);

// ficha: fuente correcta para redes
r("    <dt>Fuente</dt><dd>HLF_P2-P6.rvt</dd></dl>`;", "    <dt>Fuente</dt><dd>${CATS[cat].mep ? '1001_Hotel_la_fotona_redes.rvt · ' + h.object.userData.elementos + ' elementos' : 'HLF_P2-P6.rvt'}</dd></dl>`;");

fs.writeFileSync('src/main.ts', s);
console.log('ok');
