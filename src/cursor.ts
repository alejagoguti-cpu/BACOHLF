import { gsap } from 'gsap';

/**
 * Cursor con destello: halo dorado que sigue el mouse, estela de chispas de cuatro puntas,
 * ráfaga al entrar a cada elemento interactivo y al hacer clic. Solo en dispositivos con mouse.
 */
const INTERACTIVOS = 'button, a, .chip, .glass, .lamina, .capa, input, .actor, [data-ir], [data-explorar]';

export function iniciarCursor() {
  if (matchMedia('(hover: none)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const halo = document.createElement('div'); halo.id = 'halo';
  const punto = document.createElement('div'); punto.id = 'punto';
  const cv = document.createElement('canvas'); cv.id = 'chispas';
  document.body.append(cv, halo, punto);
  const ctx = cv.getContext('2d')!;
  const dpr = Math.min(2, devicePixelRatio);
  const ajustar = () => { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; };
  ajustar(); addEventListener('resize', ajustar);

  const hx = gsap.quickTo(halo, 'x', { duration: 0.45, ease: 'power3.out' }), hy = gsap.quickTo(halo, 'y', { duration: 0.45, ease: 'power3.out' });
  const px = gsap.quickTo(punto, 'x', { duration: 0.08 }), py = gsap.quickTo(punto, 'y', { duration: 0.08 });

  type Ch = { x: number; y: number; vx: number; vy: number; v: number; r: number; rot: number; c: string };
  const chispas: Ch[] = [];
  const COL = ['#D5BE91', '#ffffff', '#f3e3bf', '#9fc3ff'];
  const emitir = (x: number, y: number, n: number, fuerza: number) => {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, s = (0.3 + Math.random()) * fuerza;
      chispas.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - fuerza * 0.2, v: 1, r: 2 + Math.random() * 3.5, rot: Math.random() * Math.PI, c: COL[(Math.random() * COL.length) | 0] });
    }
    if (chispas.length > 260) chispas.splice(0, chispas.length - 260);
  };

  let lx = 0, ly = 0, sobre: Element | null = null;
  addEventListener('pointermove', (e) => {
    hx(e.clientX); hy(e.clientY); px(e.clientX); py(e.clientY);
    const d = Math.hypot(e.clientX - lx, e.clientY - ly);
    if (d > 14) { emitir(e.clientX, e.clientY, Math.min(3, d / 14) | 0, 0.6); lx = e.clientX; ly = e.clientY; }
    const el = (e.target as Element).closest?.(INTERACTIVOS) ?? null;
    if (el !== sobre) {
      sobre = el;
      document.body.classList.toggle('cursor-sobre', !!el);
      if (el) {
        emitir(e.clientX, e.clientY, 14, 2.4); // destello al entrar
        el.classList.remove('brilla'); void (el as HTMLElement).offsetWidth; el.classList.add('brilla');
      }
    }
  }, { passive: true });
  addEventListener('destello', (e) => { const d = (e as CustomEvent).detail; emitir(d.x, d.y, 18, 2.6); });
  addEventListener('pointerdown', (e) => { emitir(e.clientX, e.clientY, 26, 3.6); gsap.fromTo(halo, { scale: 0.6 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }); });
  document.addEventListener('pointerleave', () => gsap.to([halo, punto], { autoAlpha: 0, duration: 0.3 }));
  document.addEventListener('pointerenter', () => gsap.to([halo, punto], { autoAlpha: 1, duration: 0.3 }));

  // estrella de cuatro puntas
  const estrella = (c: Ch) => {
    const r = c.r * dpr, x = c.x * dpr, y = c.y * dpr;
    ctx.save(); ctx.translate(x, y); ctx.rotate(c.rot); ctx.globalAlpha = c.v; ctx.fillStyle = c.c;
    ctx.shadowColor = c.c; ctx.shadowBlur = 10 * dpr;
    ctx.beginPath();
    for (let k = 0; k < 8; k++) { const rr = k % 2 ? r * 0.28 : r; const a = (k * Math.PI) / 4; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const tick = () => {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (let i = chispas.length - 1; i >= 0; i--) {
      const c = chispas[i];
      c.x += c.vx; c.y += c.vy; c.vy += 0.035; c.vx *= 0.97; c.vy *= 0.97; c.v -= 0.022; c.rot += 0.08;
      if (c.v <= 0) { chispas.splice(i, 1); continue; }
      estrella(c);
    }
    requestAnimationFrame(tick);
  };
  tick();
}
