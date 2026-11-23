import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ico } from './iconos';
gsap.registerPlugin(ScrollTrigger);

/** Láminas del Piso 2 (las mismas de planosfinales) por especialidad, en carrusel 3D animado. */
const HABS = ['214', '215', '216', '217', '218', '219', '220', '221', '222', '223', '224', '225'];
const CON_PRES = ['215', '216', '217', '218', '219', '220', '221', '222'];
const BASE_PF = 'https://alejagoguti-cpu.github.io/planosfinales/assets/planos/';
type Lam = { h: string; f: string; t: string; pdf: string };
export type SetPlanos = 'arq' | 'agua' | 'san';
const SETS: Record<SetPlanos, { nombre: string; color: string; lam: Lam[] }> = {
  arq: { nombre: 'Arquitectónico', color: '#D5BE91', lam: HABS.flatMap((h) => {
    const pdf = BASE_PF + `arquitectonico/HLF-${h}-arquitectonico.pdf`;
    return CON_PRES.includes(h)
      ? [{ h, f: `arq-${h}-presentacion`, t: 'Planta, sección y 3D', pdf }, { h, f: `arq-${h}-1`, t: 'Planta arquitectónica y amoblamiento', pdf }]
      : [{ h, f: `arq-${h}-1`, t: 'Planta arquitectónica y amoblamiento', pdf }, { h, f: `arq-${h}-2`, t: 'Pisos, enchapes y cielos', pdf }];
  }) },
  agua: { nombre: 'Agua fría y caliente', color: '#3d8bff', lam: HABS.map((h) => ({ h, f: `agu-${h}-1`, t: 'Red de agua fría y caliente · planta, axonometría y detalles', pdf: BASE_PF + `agua/HLF-${h}-agua.pdf` })) },
  san: { nombre: 'Desagües', color: '#c08a52', lam: HABS.map((h) => ({ h, f: `san-${h}-1`, t: 'Red sanitaria (desagües) · planta, axonometría y detalles', pdf: BASE_PF + `desagues/HLF-${h}-desagues.pdf` })) },
};

export function iniciarCarrusel(alCambiar?: (s: SetPlanos) => void) {
  const pista = document.getElementById('pista')!;
  const chips = document.getElementById('habsCarrusel')!;
  const info = document.getElementById('infoLamina')!;
  const caja = document.getElementById('lightbox')!;
  const tabs = document.getElementById('tabsPlanos')!;
  tabs.innerHTML = (Object.keys(SETS) as SetPlanos[]).map((k) => `<button data-s="${k}" style="--c:${SETS[k].color}" class="${k === 'arq' ? 'on' : ''}"><i></i>${SETS[k].nombre}<small>${SETS[k].lam.length}</small></button>`).join('');
  chips.innerHTML = HABS.map((h) => `<button data-h="${h}">${h}</button>`).join('');
  let set: SetPlanos = 'arq';
  let LAM = SETS.arq.lam;
  let cartas: HTMLElement[] = [];
  const construir = () => {
    pista.innerHTML = LAM.map((l, i) => `<figure class="lamina" data-i="${i}" style="--c:${SETS[set].color}"><img data-src="planos/${l.f}-t.webp" alt="Habitación ${l.h} · ${l.t}" draggable="false" /><figcaption><b>${l.h}</b>${l.t}</figcaption></figure>`).join('');
    cartas = [...pista.querySelectorAll<HTMLElement>('.lamina')];
  };
  construir();
  let actual = 0, auto: number | undefined, visible = false;
  // cambiar de especialidad: las láminas actuales se van girando y llegan las nuevas en abanico
  tabs.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b || b.dataset.s === set) return;
    const nuevo = b.dataset.s as SetPlanos; const hab = LAM[actual]?.h;
    tabs.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    clearInterval(auto);
    gsap.to(cartas, { autoAlpha: 0, rotateX: -70, y: 160, z: -500, duration: 0.45, stagger: 0.012, ease: 'power2.in', overwrite: true, onComplete: () => {
      set = nuevo; LAM = SETS[set].lam; construir();
      actual = Math.max(0, LAM.findIndex((l) => l.h === hab));
      entrada(); reiniciar();
    } });
    alCambiar?.(nuevo);
  });

  const cargar = (i: number) => { const img = cartas[(i + LAM.length) % LAM.length]?.querySelector('img'); if (img && img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; } };
  function pintar(dur = 0.9) {
    const n = LAM.length; const ancho = pista.clientWidth; const paso = Math.min(300, ancho * 0.3);
    cartas.forEach((c, i) => {
      let d = i - actual; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
      const a = Math.abs(d);
      if (a <= 3) cargar(i);
      gsap.to(c, {
        x: d * paso * (a > 1 ? 0.92 : 1), z: -a * 220, rotateY: d * -28, scale: a === 0 ? 1 : 0.86,
        autoAlpha: a > 3 ? 0 : 1 - a * 0.22, filter: `blur(${a > 1 ? (a - 1) * 2 : 0}px) brightness(${a === 0 ? 1 : 0.7})`,
        zIndex: 100 - a, duration: dur, ease: 'power3.out', overwrite: 'auto',
      });
      c.classList.toggle('on', a === 0);
    });
    const l = LAM[actual];
    chips.querySelectorAll('button').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.h === l.h));
    gsap.fromTo(info, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5 });
    info.innerHTML = `<b>Habitación ${l.h}</b><span>${l.t}</span><span class="num">${String(actual + 1).padStart(2, '0')} / ${LAM.length}</span><a href="${l.pdf}" target="_blank" rel="noopener">PDF ${ico('externo')}</a>`;
  }
  const ir = (i: number) => { actual = (i + LAM.length) % LAM.length; pintar(); reiniciar(); };
  const reiniciar = () => { clearInterval(auto); if (visible) auto = window.setInterval(() => { actual = (actual + 1) % LAM.length; pintar(1.1); }, 3800); };

  document.getElementById('cPrev')!.addEventListener('click', () => ir(actual - 1));
  document.getElementById('cNext')!.addEventListener('click', () => ir(actual + 1));
  chips.addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (b) ir(LAM.findIndex((l) => l.h === b.dataset.h)); });
  pista.addEventListener('click', (e) => {
    const c = (e.target as HTMLElement).closest<HTMLElement>('.lamina'); if (!c) return;
    const i = +c.dataset.i!; if (i !== actual) return ir(i);
    abrir(i);
  });
  // arrastre / swipe
  let x0 = 0, arr = false;
  pista.addEventListener('pointerdown', (e) => { x0 = e.clientX; arr = true; });
  addEventListener('pointerup', (e) => { if (!arr) return; arr = false; const dx = e.clientX - x0; if (Math.abs(dx) > 50) ir(actual + (dx < 0 ? 1 : -1)); });
  pista.addEventListener('mouseenter', () => clearInterval(auto));
  pista.addEventListener('mouseleave', reiniciar);
  addEventListener('keydown', (e) => {
    if (caja.classList.contains('on')) { if (e.key === 'Escape') cerrar(); if (e.key === 'ArrowRight') abrir(actual = (actual + 1) % LAM.length); if (e.key === 'ArrowLeft') abrir(actual = (actual - 1 + LAM.length) % LAM.length); return; }
    if (!visible) return; if (e.key === 'ArrowRight') ir(actual + 1); if (e.key === 'ArrowLeft') ir(actual - 1);
  });

  // lámina en grande
  function abrir(i: number) {
    const l = LAM[i];
    caja.innerHTML = `<div class="lb-top"><b>Habitación ${l.h}</b><span>${l.t}</span><a href="${l.pdf}" target="_blank" rel="noopener">Abrir PDF ${ico('externo')}</a><button class="lb-x" aria-label="Cerrar">${ico('cerrar')}</button></div><div class="lb-img"><img src="planos/${l.f}-t.webp" alt="" /></div>`;
    const img = caja.querySelector('img')!; const hd = new Image(); hd.onload = () => (img.src = hd.src); hd.src = `planos/${l.f}.webp`;
    caja.classList.add('on'); clearInterval(auto);
    gsap.fromTo(caja.querySelector('.lb-img'), { scale: 0.7, rotateX: 25, autoAlpha: 0, transformPerspective: 1200 }, { scale: 1, rotateX: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' });
    caja.querySelector('.lb-x')!.addEventListener('click', cerrar);
    let zoom = false;
    img.addEventListener('click', (e) => {
      zoom = !zoom; const r = img.getBoundingClientRect();
      img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
      gsap.to(img, { scale: zoom ? 2.6 : 1, duration: 0.6, ease: 'power3.inOut' });
    });
  }
  function cerrar() { caja.classList.remove('on'); reiniciar(); pintar(); }
  caja.addEventListener('click', (e) => { if (e.target === caja) cerrar(); });

  addEventListener('resize', () => pintar(0));
  gsap.set(cartas, { autoAlpha: 0 });
  // entrada por scroll: las láminas llegan volando desde el fondo y se acomodan en el carrusel
  const entrada = () => {
    cartas.forEach((c, i) => { let d = i - actual; if (d > LAM.length / 2) d -= LAM.length; if (Math.abs(d) <= 3) cargar(i); });
    gsap.fromTo(cartas, { x: 0, y: 0, z: -1400, rotateY: 0, rotateX: 60, autoAlpha: 0, scale: 0.6 }, {
      x: 0, z: -600, rotateX: 0, autoAlpha: 0.9, scale: 0.7, duration: 0.7, stagger: 0.025, ease: 'power2.out',
      onComplete: () => pintar(1.2),
    });
  };
  const salida = (dir: number) => { visible = false; clearInterval(auto); gsap.to(cartas, { autoAlpha: 0, z: -900, y: -120 * dir, rotateX: 30 * dir, duration: 0.6, stagger: 0.015, ease: 'power2.in', overwrite: 'auto' }); };
  pintar(0); gsap.set(cartas, { autoAlpha: 0 });
  ScrollTrigger.create({
    trigger: '[data-escena="planos"]', start: 'top 70%', end: 'bottom 30%',
    onEnter: () => { visible = true; entrada(); reiniciar(); }, onEnterBack: () => { visible = true; entrada(); reiniciar(); },
    onLeave: () => salida(1), onLeaveBack: () => salida(-1),
  });
}
