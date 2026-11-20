// ───────────────────────── recorrido (MODO A): "construir antes de construir" ─────────────────────────
// El scroll es el reloj del proyecto: mes 0 → 12, con las etapas y honorarios de la Propuesta BACO v03.
let tl: gsap.core.Timeline; let st: ScrollTrigger;
let escenaActual = 1; // 1 apertura · 2 A · 3 B · 4 C · 5 D
const FASES = [
  { k: '00', nombre: 'Escaneo', t0: 0 }, { k: 'A', nombre: 'Estructurar', t0: 10 }, { k: 'B', nombre: 'Coordinar', t0: 25 },
  { k: 'C', nombre: 'Construir', t0: 55 }, { k: 'D', nombre: 'Entregar', t0: 105 },
];
const T_FIN = 130;
/** Honorarios acumulados (millones COP, sin IVA) según el cronograma de la propuesta: A mes 0–1, B 1–3, C 3–11, D 11–12. */
function honorarios(m: number, integrada: boolean) {
  const r = integrada ? 13.8 : 23;
  if (m <= 1) return 33 * m;
  if (m <= 3) return 33 + 47 * ((m - 1) / 2);
  if (m <= 11) return 80 + r * (m - 3);
  return 80 + 8 * r + 31 * Math.min(1, m - 11);
}
let totalMep = 0;
function construirRecorrido() {
  const nivelP2 = niveles.findIndex((n) => n.info.nombre === 'PISO 2');
  const elevP2 = niveles[nivelP2]?.info.elev ?? 3;
  const c2 = niveles[nivelP2].caja.getCenter(new THREE.Vector3());
  const cm = cajaMep.isEmpty() ? c2 : centroMep;
  const cp = critico.ok ? critico.p : cm;
  totalMep = (mepInfo?.cats ?? []).reduce((s, c) => s + c.elementos, 0);
  // estado de apertura: la torre es una nube de escaneo sobre azul Estelar
  Object.assign(S, { nube: 1, noche: 1, ctx: 0, bim: 1, obra: 0, dibujo: 0, mep: 0, az: 48, el: 14, dist: 112, ty: 10 });
  tl = gsap.timeline({ defaults: { ease: 'none' }, paused: true });
  const T = (obj: object, at: number, dur: number, ease = 'none') => tl.to(S, { ...obj, duration: dur, ease }, at);

  // reloj del proyecto
  T({ mes: 1 }, 10, 15); T({ mes: 3 }, 25, 30); T({ mes: 11 }, 55, 50); T({ mes: 12 }, 105, 20);

  // 00 · Escaneo (mes 0): la nube gira despacio
  T({ az: 18, el: 20, dist: 104 }, 0, 10);
  tl.to('.titulo .w', { yPercent: -80, opacity: 0, stagger: 0.6, duration: 4 }, 4);
  tl.to('.hero-der', { y: -60, opacity: 0, duration: 3 }, 4);
  tl.to('#velo', { opacity: 0, duration: 5 }, 6);

  // A · Estructurar: la nube se condensa en el modelo técnico, el día se aclara
  T({ nube: 0 }, 11, 7, 'power1.inOut');
  T({ noche: 0 }, 12, 8);
  T({ bordes: 0.5, ctx: 0.3, az: -32, el: 30, dist: 128 }, 11, 14, 'power1.inOut');

  // B · Coordinar: las redes reales del Piso 2 se trazan y aparece el punto crítico
  T({ verHasta: nivelP2, corteY: elevP2 + 2.75, cerr: 0.92, bordes: 0.22, mep: 1, ctx: 0, az: 14, el: 52, dist: 44, ty: elevP2 + 2, tx: cm.x, tz: cm.z, shift: 0.16 }, 25, 5, 'power2.inOut');
  T({ dibujo: 1 }, 29, 16, 'power1.in');
  T({ alerta: 1 }, 44, 2);
  T({ tx: cp.x, ty: cp.y, tz: cp.z, dist: 9, el: 38, az: 40 }, 45, 6, 'power2.inOut');
  T({ dist: 40, el: 50, az: 0, tx: cm.x, tz: cm.z, ty: elevP2 + 2 }, 51, 4, 'power2.inOut');

  // C · Construir: los pisos pasan de modelo a obra, de abajo hacia arriba
  T({ alerta: 0, verHasta: 9, corteY: 999, cerr: 0, mep: 0, tx: 0, tz: 0, ty: 9, az: -40, el: 24, dist: 132, shift: 0.12, bim: 0, ctx: 0.7 }, 55, 5, 'power2.inOut');
  T({ obra: 1 }, 58, 42, 'power1.inOut');
  T({ az: 95, el: 20, dist: 122, ctx: 1 }, 60, 45);
  T({ bordes: 0 }, 96, 6);

  // D · Entregar: gemelo digital (fachada translúcida, redes visibles)
  T({ cerr: 0.6, mep: 1, az: 150, el: 30, dist: 100, ty: 7 }, 105, 10, 'power2.inOut');
  T({ cerr: 0, mep: 0, az: 200, el: 22, dist: 125, ty: 9 }, 120, 10, 'power2.inOut');

  // tarjetas de cada fase
  FASES.forEach((f, i) => {
    const el = `.escena[data-e="${i + 1}"]`; const fin = FASES[i + 1]?.t0 ?? T_FIN;
    if (i === 0) gsap.set(el, { autoAlpha: 1 });
    else tl.fromTo(el, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 2, ease: 'power2.out' }, f.t0 + 1);
    if (i < FASES.length - 1) tl.to(el, { autoAlpha: 0, y: -50, duration: 2 }, fin - 2.5);
  });
  // tablero en vivo: entra al terminar la apertura
  tl.fromTo('#hudObra', { autoAlpha: 0, x: 40 }, { autoAlpha: 1, x: 0, duration: 3, ease: 'power2.out' }, 8);
  tl.set({}, {}, T_FIN);

  $('#marcas').innerHTML = FASES.map((f) => `<li style="top:${(f.t0 / T_FIN) * 100}%">${f.k} · ${f.nombre}</li>`).join('');
  st = ScrollTrigger.create({
    trigger: '#escenario', start: 'top top', end: () => '+=' + innerHeight * 20,
    pin: true, anticipatePin: 1, scrub: 0.6, invalidateOnRefresh: true, animation: tl,
    onUpdate: (self) => {
      ($('#progreso i')).style.height = (self.progress * 100) + '%';
      const t = self.progress * T_FIN; let e = 1; FASES.forEach((f, i) => { if (t >= f.t0) e = i + 1; });
      if (e !== escenaActual) document.querySelectorAll('#marcas li').forEach((li, i) => li.classList.toggle('on', i === e - 1));
      escenaActual = e;
    },
  });
}

// ── tablero en vivo (HUD) ──
let hudIntegrada = false;
const hudCnv = () => document.getElementById('hudCurva') as HTMLCanvasElement | null;
function pintarHud() {
  const m = S.mes;
  const set = (id: string, v: string) => { const el = document.getElementById(id); if (el && el.textContent !== v) el.textContent = v; };
  set('hMes', String(Math.floor(m)).padStart(2, '0'));
  const ind = honorarios(m, false), int = honorarios(m, true);
  set('hInd', '$' + ind.toLocaleString('es-CO', { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + ' M');
  set('hInt', '$' + int.toLocaleString('es-CO', { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + ' M');
  set('hMep', Math.round(totalMep * S.dibujo).toLocaleString('es-CO'));
  set('hNiv', String(Math.round(S.obra * niveles.length)));
  const fase = escenaActual - 1;
  document.querySelectorAll('#hFases b').forEach((b, i) => { b.classList.toggle('on', i === fase); b.classList.toggle('hecho', i < fase); });
  // curva de honorarios acumulados, dibujada hasta el mes actual
  const c = hudCnv(); if (!c) return;
  const dpr = Math.min(2, devicePixelRatio); const W = c.clientWidth, H = c.clientHeight;
  if (c.width !== W * dpr) { c.width = W * dpr; c.height = H * dpr; }
  const x = c.getContext('2d')!; x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
  const P = 6, X = (mm: number) => P + (mm / 12) * (W - 2 * P), Y = (v: number) => H - P - (v / 300) * (H - 2 * P - 10);
  x.strokeStyle = 'rgba(255,255,255,.08)'; x.lineWidth = 1;
  for (const k of [1, 3, 11]) { x.beginPath(); x.moveTo(X(k), P); x.lineTo(X(k), H - P); x.stroke(); }
  const serie = (integ: boolean, color: string, foco: boolean) => {
    x.beginPath(); for (let mm = 0; mm <= m + 1e-6; mm += 0.05) { const v = honorarios(Math.min(mm, m), integ); mm === 0 ? x.moveTo(X(mm), Y(v)) : x.lineTo(X(mm), Y(v)); }
    x.lineTo(X(m), Y(honorarios(m, integ)));
    x.strokeStyle = color; x.lineWidth = foco ? 2.6 : 1.6; x.globalAlpha = foco ? 1 : 0.55; x.shadowColor = color; x.shadowBlur = foco ? 10 : 0; x.stroke();
    x.shadowBlur = 0;
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, color + (foco ? '55' : '22')); g.addColorStop(1, color + '00');
    x.lineTo(X(m), H - P); x.lineTo(X(0), H - P); x.closePath(); x.fillStyle = g; x.fill(); x.globalAlpha = 1;
    x.beginPath(); x.arc(X(m), Y(honorarios(m, integ)), foco ? 4.5 : 3, 0, Math.PI * 2); x.fillStyle = '#fff'; x.fill();
  };
  serie(true, '#b59535', hudIntegrada); serie(false, '#7fb0ff', !hudIntegrada);
}
