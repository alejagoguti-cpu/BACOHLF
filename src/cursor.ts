/**
 * Interacción sobria (presentación ejecutiva): cursor normal del sistema; al entrar a un botón,
 * chip o tarjeta solo pasa un barrido de luz discreto. Sin halos, estelas ni partículas.
 */
const INTERACTIVOS = 'button, a, .chip, .glass, .capa, .actor, .tabs-planos button, .seg button, .btn-explorar';

export function iniciarCursor() {
  if (matchMedia('(hover: none)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let sobre: Element | null = null;
  addEventListener('pointermove', (e) => {
    const el = (e.target as Element).closest?.(INTERACTIVOS) ?? null;
    if (el === sobre) return;
    sobre = el;
    if (el) { el.classList.remove('brilla'); void (el as HTMLElement).offsetWidth; el.classList.add('brilla'); }
  }, { passive: true });
}
