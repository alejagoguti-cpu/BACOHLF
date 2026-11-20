// Secciones comerciales (presentación "BACO · BIM Experience" convertida en landing).
// Todo se anima con el scroll y responde al usuario. Fuentes:
//  · cifras del modelo: exportación real de HLF_P2-P6.rvt y 1001_Hotel_la_fotona_redes.rvt
//  · cifras comerciales: Propuesta BACO v03 (9 nov 2026) y BACO_BIM_Experience.pptx
//  · tablero e incidencias: ejemplo ilustrativo de la presentación (marcado como tal)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface DatosModelo {
  redes: { nombre: string; disc: string; color: string; elementos: number; tris: number }[];
  niveles: { nombre: string; cats: { nombre: string; tris: number; color: string }[] }[];
}

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector(s) as T;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll(s)] as T[];
const NS = 'http://www.w3.org/2000/svg';
const svg = (tag: string, at: Record<string, string | number> = {}, padre?: Element) => {
  const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(at)) e.setAttribute(k, String(v));
  padre?.appendChild(e); return e;
};
const fmt = (v: number, d = 0) => v.toLocaleString('es-CO', { minimumFractionDigits: d, maximumFractionDigits: d });
const enVista = (el: Element, fn: () => void) => ScrollTrigger.create({ trigger: el, start: 'top 78%', once: true, onEnter: fn });

/** Títulos: cada palabra sube desde una máscara. */
function titulos() {
  $$('.sec h2').forEach((h) => {
    if (h.dataset.hecho) return; h.dataset.hecho = '1';
    h.innerHTML = h.innerHTML.split(/(<em>.*?<\/em>|\s+)/).filter(Boolean).map((t) => /^\s+$/.test(t) ? t : `<span class="m"><span>${t}</span></span>`).join('');
    gsap.from($$('.m > span', h), { yPercent: 110, duration: 1, ease: 'power3.out', stagger: 0.06, scrollTrigger: { trigger: h, start: 'top 85%' } });
  });
  $$('.sec .reveal').forEach((el) => gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
}

/** Contadores que corren al entrar en pantalla. */
function contadores() {
  $$('#comercial [data-n]').forEach((el) => {
    const fin = parseFloat(el.dataset.n!); const d = +(el.dataset.d || 0); const o = { v: 0 };
    enVista(el, () => gsap.to(o, { v: fin, duration: 1.8, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(o.v, d); } }));
  });
}

/** 02 · Riesgos: tarjetas que giran para mostrar cómo se gestionan. */
function riesgos() {
  $$('.riesgo').forEach((c, i) => {
    gsap.from(c, { y: 60, opacity: 0, rotate: i % 2 ? 2 : -2, duration: 0.9, ease: 'power3.out', delay: i * 0.08, scrollTrigger: { trigger: c, start: 'top 88%' } });
    enVista(c, () => setTimeout(() => c.classList.add('visto'), 300 + i * 150));
    c.addEventListener('click', () => c.classList.toggle('vuelta'));
  });
}

/** 03 · Antes / después con cortina arrastrable. */
function cortina() {
  const caja = $('#cambio .comparar'); if (!caja) return;
  const mango = $('.mango', caja); const capa = $('.con', caja);
  const poner = (p: number) => { p = Math.min(0.96, Math.max(0.04, p)); capa.style.clipPath = `inset(0 0 0 ${p * 100}%)`; mango.style.left = p * 100 + '%'; };
  let arrastrando = false;
  const mover = (ev: PointerEvent) => { if (!arrastrando) return; const r = caja.getBoundingClientRect(); poner((ev.clientX - r.left) / r.width); };
  caja.addEventListener('pointerdown', (ev) => { arrastrando = true; caja.setPointerCapture(ev.pointerId); mover(ev); });
  caja.addEventListener('pointermove', mover);
  caja.addEventListener('pointerup', () => { arrastrando = false; });
  const o = { p: 0.96 }; poner(o.p);
  enVista(caja, () => gsap.to(o, { p: 0.5, duration: 1.6, ease: 'power3.inOut', onUpdate: () => poner(o.p) }));
}

/** 04 · El modelo en datos (real). */
function datos(d: DatosModelo) {
  // barras: elementos por sistema MEP
  const barras = $('#gBarras'); if (!barras) return; barras.innerHTML = '';
  const max = Math.max(...d.redes.map((r) => r.elementos));
  d.redes.slice().sort((a, b) => b.elementos - a.elementos).forEach((r) => {
    const fila = document.createElement('button'); fila.className = 'barra';
    fila.innerHTML = `<span class="et"><i style="background:${r.color}"></i>${r.nombre}</span><span class="pista"><b style="background:${r.color}"></b></span><span class="val">0</span>`;
    fila.title = `${r.disc} · ${fmt(r.tris)} triángulos`;
    barras.appendChild(fila);
    const b = $('b', fila); const v = $('.val', fila); const o = { v: 0 };
    enVista(barras, () => {
      gsap.fromTo(b, { width: '0%' }, { width: (100 * r.elementos) / max + '%', duration: 1.4, ease: 'power3.out', delay: Math.random() * 0.3 });
      gsap.to(o, { v: r.elementos, duration: 1.4, ease: 'power3.out', onUpdate: () => { v.textContent = fmt(o.v); } });
    });
    fila.addEventListener('mouseenter', () => { $$('.barra', barras).forEach((x) => x.classList.toggle('apagada', x !== fila)); mostrarDetalle(r); });
    fila.addEventListener('mouseleave', () => $$('.barra', barras).forEach((x) => x.classList.remove('apagada')));
  });
  const det = $('#gDetalle');
  const mostrarDetalle = (r: DatosModelo['redes'][number]) => {
    det.innerHTML = `<small>${r.disc}</small><b>${fmt(r.elementos)}</b><span>elementos de ${r.nombre.toLowerCase()}</span><em>${fmt(r.tris)} triángulos en el modelo web</em>`;
    gsap.fromTo(det, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 });
  };
  mostrarDetalle(d.redes.slice().sort((a, b) => b.elementos - a.elementos)[0]);

  // dona: elementos MEP por disciplina
  const porDisc = new Map<string, { n: number; color: string }>();
  d.redes.forEach((r) => { const x = porDisc.get(r.disc) || { n: 0, color: r.color }; x.n += r.elementos; porDisc.set(r.disc, x); });
  const total = [...porDisc.values()].reduce((s, x) => s + x.n, 0);
  const dona = $('#gDona'); dona.innerHTML = '';
  const s = svg('svg', { viewBox: '0 0 200 200' }, dona);
  const R = 78, C = 2 * Math.PI * R; let acc = 0;
  const leyenda = $('#gDonaLeyenda'); leyenda.innerHTML = '';
  for (const [disc, x] of porDisc) {
    const arco = svg('circle', { cx: 100, cy: 100, r: R, fill: 'none', stroke: x.color, 'stroke-width': 26, 'stroke-dasharray': `0 ${C}`, transform: `rotate(${-90 + (acc / total) * 360} 100 100)` }, s);
    const largo = (x.n / total) * C - 2; acc += x.n;
    enVista(dona, () => gsap.to(arco, { attr: { 'stroke-dasharray': `${largo} ${C}` }, duration: 1.4, ease: 'power3.out', delay: (acc / total) * 0.4 }));
    const li = document.createElement('li'); li.innerHTML = `<i style="background:${x.color}"></i>${disc}<b>${Math.round((100 * x.n) / total)} %</b>`;
    li.addEventListener('mouseenter', () => { gsap.to(arco, { attr: { 'stroke-width': 34 }, duration: 0.3 }); centro.textContent = fmt(x.n); sub.textContent = disc; });
    li.addEventListener('mouseleave', () => { gsap.to(arco, { attr: { 'stroke-width': 26 }, duration: 0.3 }); centro.textContent = fmt(total); sub.textContent = 'elementos MEP'; });
    leyenda.appendChild(li);
  }
  const centro = svg('text', { x: 100, y: 102, 'text-anchor': 'middle', class: 'dona-n' }, s); centro.textContent = fmt(total);
  const sub = svg('text', { x: 100, y: 124, 'text-anchor': 'middle', class: 'dona-s' }, s); sub.textContent = 'elementos MEP';

  // columnas apiladas: geometría por nivel y categoría
  const col = $('#gNiveles'); col.innerHTML = '';
  const maxT = Math.max(...d.niveles.map((n) => n.cats.reduce((s2, c) => s2 + c.tris, 0)));
  d.niveles.forEach((n, i) => {
    const t = n.cats.reduce((s2, c) => s2 + c.tris, 0);
    const c = document.createElement('div'); c.className = 'col';
    c.innerHTML = `<div class="pila">${n.cats.sort((a, b) => b.tris - a.tris).map((k) => `<span style="background:${k.color};flex-grow:${k.tris}" title="${k.nombre}: ${fmt(k.tris)} triángulos"></span>`).join('')}</div><small>${n.nombre.replace('PISO ', 'P')}</small>`;
    col.appendChild(c);
    const pila = $('.pila', c);
    enVista(col, () => gsap.fromTo(pila, { height: '0%' }, { height: (100 * t) / maxT + '%', duration: 1.2, ease: 'power3.out', delay: i * 0.08 }));
  });
}

/** 05 · Detectar antes de instalar (ejemplo conceptual de la presentación). */
function conflicto() {
  const caja = $('#conflicto'); if (!caja) return;
  const ducto = $<SVGPathElement>('#cDucto', caja); const choque = $('#cChoque', caja); const estado = $('#cEstado', caja);
  const PATH_A = 'M20 150 L560 150'; const PATH_B = 'M20 150 L170 150 Q200 150 200 120 L200 70 Q200 40 230 40 L350 40 Q380 40 380 70 L380 120 Q380 150 410 150 L560 150';
  let resuelto = false;
  const pintar = () => {
    gsap.to(ducto, { attr: { d: resuelto ? PATH_B : PATH_A }, duration: 1.2, ease: 'power3.inOut' });
    gsap.to(choque, { opacity: resuelto ? 0 : 1, scale: resuelto ? 0.4 : 1, transformOrigin: '50% 50%', duration: 0.6 });
    estado.className = 'estado ' + (resuelto ? 'ok' : 'mal');
    estado.innerHTML = resuelto ? '<b>Ruta coordinada</b><span>El especialista ajusta el recorrido y BACO comprueba el cierre de la incidencia.</span>'
      : '<b>Conflicto detectado</b><span>Si llega a obra, puede requerir rectificaciones, tiempo y costos adicionales.</span>';
    $$('#conflicto .seg button').forEach((b) => b.classList.toggle('on', (b.dataset.r === '1') === resuelto));
  };
  $$('#conflicto .seg button').forEach((b) => b.addEventListener('click', () => { resuelto = b.dataset.r === '1'; pintar(); }));
  gsap.to(choque, { opacity: 0.35, repeat: -1, yoyo: true, duration: 0.7, ease: 'sine.inOut' });
  ducto.setAttribute('d', PATH_A); pintar();
  enVista(caja, () => gsap.from(ducto, { attr: { d: 'M20 150 L21 150' }, duration: 1.2, ease: 'power2.out' }));
}

/** 06 · Tablero ejecutivo (ejemplo ilustrativo de la presentación). */
function tablero() {
  const anillo = $<SVGCircleElement>('#tAnillo'); if (!anillo) return;
  const C = 2 * Math.PI * 70;
  anillo.setAttribute('stroke-dasharray', `0 ${C}`);
  enVista(anillo, () => gsap.to(anillo, { attr: { 'stroke-dasharray': `${(18 / 24) * C} ${C}` }, duration: 1.6, ease: 'power3.out' }));
  $$('#tFiltros button').forEach((b) => b.addEventListener('click', () => {
    $$('#tFiltros button').forEach((x) => x.classList.toggle('on', x === b));
    const f = b.dataset.f!;
    $$('#tLista li').forEach((li) => {
      const ver = f === 'todas' || li.dataset.e === f;
      gsap.to(li, { height: ver ? 'auto' : 0, opacity: ver ? 1 : 0, paddingTop: ver ? 12 : 0, paddingBottom: ver ? 12 : 0, duration: 0.45, ease: 'power2.inOut' });
    });
  }));
  $$('#tLista li').forEach((li, i) => gsap.from(li, { x: -30, opacity: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: '#tLista', start: 'top 85%' } }));
}

/** 07 · Inversión: barras por etapa y sensibilidad por duración (propuesta v03). */
function inversion() {
  const E = [['A', 'BEP / contratación', 33, 33], ['B', 'Coordinación de diseños', 47, 47], ['C', 'Acompañamiento en obra', 184, 110.4], ['D', 'As-built / activo digital', 31, 31]] as const;
  const g = $('#iBarras'); if (!g) return; g.innerHTML = '';
  E.forEach(([k, n, a, b]) => {
    const f = document.createElement('div'); f.className = 'ib';
    f.innerHTML = `<span class="et"><b>${k}</b>${n}</span><div class="dos"><i class="a"><em>${fmt(a, a % 1 ? 1 : 0)}</em></i><i class="b"><em>${fmt(b, b % 1 ? 1 : 0)}</em></i></div>`;
    g.appendChild(f);
    enVista(g, () => {
      gsap.fromTo($('.a', f), { width: 0 }, { width: (a / 184) * 100 + '%', duration: 1.3, ease: 'power3.out' });
      gsap.fromTo($('.b', f), { width: 0 }, { width: (b / 184) * 100 + '%', duration: 1.3, ease: 'power3.out', delay: 0.15 });
    });
  });
  $$('#iModo button').forEach((b) => b.addEventListener('click', () => {
    $$('#iModo button').forEach((x) => x.classList.toggle('on', x === b));
    g.dataset.foco = b.dataset.m!;
  }));
  // sensibilidad: 6–9 meses, dos modalidades (111 + meses × 23 | 13,8)
  const s = $('#iLinea'); s.innerHTML = '';
  const W = 520, H = 240, P = 40; const meses = [6, 7, 8, 9];
  const y = (v: number) => H - P - ((v - 180) / (330 - 180)) * (H - 2 * P); const x = (m: number) => P + ((m - 6) / 3) * (W - 2 * P);
  const sv = svg('svg', { viewBox: `0 0 ${W} ${H}` }, s);
  [200, 250, 300].forEach((v) => { svg('line', { x1: P, x2: W - P, y1: y(v), y2: y(v), class: 'grid' }, sv); const t = svg('text', { x: 6, y: y(v) + 4, class: 'eje' }, sv); t.textContent = '$' + v; });
  meses.forEach((m) => { const t = svg('text', { x: x(m), y: H - 10, 'text-anchor': 'middle', class: 'eje' }, sv); t.textContent = m + ' m'; });
  const tip = $('#iTip');
  [['ind', 23, '#0e3064'], ['int', 13.8, '#b59535']].forEach(([id, mes, color]) => {
    const pts = meses.map((m) => [x(m), y(111 + m * (mes as number))]);
    const pl = svg('polyline', { points: pts.map((p) => p.join(',')).join(' '), fill: 'none', stroke: color as string, 'stroke-width': 3, class: 'l-' + id }, sv) as SVGPolylineElement;
    const L = pl.getTotalLength?.() || 600; pl.style.strokeDasharray = String(L); pl.style.strokeDashoffset = String(L);
    enVista(sv, () => gsap.to(pl, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }));
    meses.forEach((m, i) => {
      const v = 111 + m * (mes as number);
      const c = svg('circle', { cx: pts[i][0], cy: pts[i][1], r: 6, fill: '#fff', stroke: color as string, 'stroke-width': 3, class: 'pt' }, sv);
      gsap.from(c, { scale: 0, transformOrigin: '50% 50%', duration: 0.5, delay: 0.4 + i * 0.15, scrollTrigger: { trigger: sv, start: 'top 78%' } });
      c.addEventListener('mouseenter', () => { tip.innerHTML = `<b>$${fmt(v, 1)} M</b> sin IVA · ${m} meses · ${id === 'ind' ? 'independiente' : 'BIM + construcción'}`; tip.classList.add('on'); gsap.to(c, { attr: { r: 9 }, duration: 0.2 }); });
      c.addEventListener('mouseleave', () => { tip.classList.remove('on'); gsap.to(c, { attr: { r: 6 }, duration: 0.2 }); });
    });
  });
}

/** 08 · Próximos pasos: línea que se dibuja con el scroll. */
function pasos() {
  const l = $('#pLinea'); if (!l) return;
  gsap.fromTo(l, { scaleX: 0 }, { scaleX: 1, ease: 'none', transformOrigin: '0 50%', scrollTrigger: { trigger: '#pasos', start: 'top 70%', end: 'bottom 60%', scrub: true } });
  $$('.paso').forEach((p, i) => {
    gsap.from(p, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#pasos', start: `top ${70 - i * 6}%` } });
    p.addEventListener('click', () => { $$('.paso').forEach((x) => x.classList.toggle('abierto', x === p && !x.classList.contains('abierto'))); });
  });
}

/** Cursor magnético en botones píldora. */
function magnetico() {
  $$('.pill, .chip, .seg button').forEach((b) => {
    b.addEventListener('mousemove', (ev) => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (ev.clientX - r.left - r.width / 2) * 0.18, y: (ev.clientY - r.top - r.height / 2) * 0.25, duration: 0.3 }); });
    b.addEventListener('mouseleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' }));
  });
}

export function iniciarComercial(d: DatosModelo) {
  titulos(); contadores(); riesgos(); cortina(); datos(d); conflicto(); tablero(); inversion(); pasos(); magnetico();
  ScrollTrigger.refresh();
}
