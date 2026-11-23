import { gsap } from 'gsap';
import './hero.css';

const FRASES = ['coordinar los diseños', 'controlar la obra', 'detectar interferencias', 'registrar cada cambio', 'entregar el gemelo digital'];
const CINTA = [['A', 'BEP y EIR/AIR'], ['B', 'Federación de modelos'], ['B', 'Control de interferencias'], ['C', 'Mesa BIM semanal'], ['C', 'RFI y cambios'],
  ['C', 'Informe mensual'], ['D', 'As-built'], ['D', 'Gemelo digital'], ['', 'ISO 19650'], ['', 'IFC'], ['', 'BIMForum LOD 2025'], ['', 'CDE']];

export function iniciarHero() {
  // cinta infinita (duplicada para que el bucle no tenga corte)
  const items = CINTA.map(([e, t]) => `<span>${e ? `<b>Etapa ${e}</b>` : ''}${t}</span>`).join('');
  document.getElementById('marquee')!.innerHTML = items + items;

  // palabra que rota con desenfoque
  const rota = document.getElementById('rota')!; let k = 0;
  setInterval(() => {
    k = (k + 1) % FRASES.length;
    gsap.timeline()
      .to(rota, { autoAlpha: 0, y: -18, filter: 'blur(10px)', duration: 0.4, ease: 'power2.in' })
      .call(() => { rota.textContent = FRASES[k]; })
      .fromTo(rota, { autoAlpha: 0, y: 18, filter: 'blur(10px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out' });
  }, 2600);

  // parallax de las tarjetas flotantes con el mouse (cada una a su profundidad)
  const fls = [...document.querySelectorAll<HTMLElement>('.fl')].map((el) => ({
    p: +(el.dataset.p ?? 1), x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3.out' }), y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3.out' }),
  }));
  addEventListener('pointermove', (e) => {
    const dx = e.clientX / innerWidth - 0.5, dy = e.clientY / innerHeight - 0.5;
    fls.forEach((f) => { f.x(-dx * 40 * f.p); f.y(-dy * 30 * f.p); });
  });
  // al bajar, las tarjetas se separan hacia los lados y el fondo (profundidad)
  addEventListener('scroll', () => {
    const t = Math.min(1, scrollY / innerHeight);
    document.querySelectorAll<HTMLElement>('.flotantes').forEach((f) => { f.style.opacity = String(1 - t * 1.4); f.style.transform = `translateY(${-t * 120}px) scale(${1 + t * 0.15})`; });
  }, { passive: true });

  // botones que llevan a una sección
  document.querySelectorAll<HTMLElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => {
    const s = document.querySelector<HTMLElement>(`[data-escena="${b.dataset.ir}"]`);
    if (s) window.scrollTo({ top: s.offsetTop + 10, behavior: 'smooth' });
  }));
}
