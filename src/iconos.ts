/** Íconos planos de trazo (24×24, currentColor). Sin emojis ni símbolos tipográficos. */
const P: Record<string, string> = {
  // interfaz
  chispa: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M7.5 7.5l2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  cerrar: '<path d="M6 6l12 12M18 6L6 18"/>',
  abajo: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  externo: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  izq: '<path d="M15 5l-7 7 7 7"/>',
  der: '<path d="M9 5l7 7-7 7"/>',
  flecha: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  cruce: '<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>',
  cubo3d: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  // problema
  interferencia: '<path d="M3 9h18M3 15h18"/><path d="M9 3v18"/><circle cx="9" cy="9" r="2.6"/>',
  rfi: '<path d="M4 5h16v11H9l-5 4z"/><path d="M10 8.5a2 2 0 1 1 2.8 1.8c-.6.3-.8.7-.8 1.2M12 13.6v.1"/>',
  cambios: '<path d="M4 9a8 8 0 0 1 14-3l2 2M20 15a8 8 0 0 1-14 3l-2-2"/><path d="M20 4v4h-4M4 20v-4h4"/>',
  versiones: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5M3 17l9 5 9-5"/>',
  ocultas: '<path d="M3 3l18 18"/><path d="M10.6 6.2A9 9 0 0 1 21 12a14 14 0 0 1-2.4 3.2M6.2 7.6A14 14 0 0 0 3 12a9 9 0 0 0 12.7 5.3"/><path d="M9.9 10a3 3 0 0 0 4.2 4.2"/>',
  alturas: '<path d="M4 3h16M4 21h16"/><path d="M12 6v12M9 9l3-3 3 3M9 15l3 3 3-3"/>',
  pasos: '<path d="M10 3v18M14 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="2.5"/>',
  mantenimiento: '<path d="M14.5 6.5a4 4 0 0 0 5 5L11 20a2.1 2.1 0 0 1-3-3l8.5-8.5a4 4 0 0 0-2-2z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',
  constructibilidad: '<path d="M4 21V9l6-5 6 5"/><path d="M10 4v17M16 9h5v12M4 13h6M4 17h6"/>',
  registros: '<path d="M8 4h8v3H8z"/><path d="M6 5H5v16h14V5h-1"/><path d="M8 11h8M8 15h5"/>',
  // revisión de la entrega / gemelo
  archivo: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',
  coordenadas: '<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
  alerta: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.1"/>',
  nota: '<path d="M5 4h14v12l-4 4H5z"/><path d="M15 20v-4h4M8 9h8M8 13h5"/>',
  manual: '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12v4"/>',
  garantia: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  etiqueta: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8" r="1.4"/>',
  ubicacion: '<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  calendario: '<path d="M4 6h16v15H4z"/><path d="M4 10h16M8 3v5M16 3v5"/>',
  // etapas
  plano: '<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',
  capas: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/>',
  casco: '<path d="M3 17h18M5 17a7 7 0 0 1 14 0"/><path d="M10 10V6h4v4"/><path d="M4 17v2h16v-2"/>',
  gemelo: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/><circle cx="12" cy="12" r="1.6"/>',
  // actores
  escaner: '<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><path d="M4 12h16"/>',
  diseno: '<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',
  red: '<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M6 6.5l3.6 3.6M18 6.5l-3.6 3.6M6 17.5l3.6-3.6M18 17.5l-3.6-3.6"/>',
  propietario: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6M9 10h.1M15 10h.1"/>',
  // disciplinas
  arquitectura: '<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-5h6v5M9 11h2M13 11h2"/>',
  estructura: '<path d="M3 5h18M3 19h18"/><path d="M6 5v14M18 5v14M12 5v14"/>',
  hidro: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
  rci: '<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-3 3.5-3 6-1-1-1.5-2-1.5-3C7 10 6 12.5 6 15a6 6 0 0 0 6 6z"/>',
  electrica: '<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',
  mecanica: '<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-6 4-6 2 0 2 3 0 5M14 12c4 0 6 1 6 4 0 2-3 2-5 0M12 14c0 4-1 6-4 6-2 0-2-3 0-5M10 12c-4 0-6-1-6-4 0-2 3-2 5 0"/>',
};

export function ico(nombre: string, cls = '') {
  const d = P[nombre] ?? P.chispa;
  return `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
}

/** Reemplaza cada <i data-i="nombre"></i> por su ícono y prepara el trazo para "dibujarse" al pasar el cursor. */
export function pintarIconos(raiz: ParentNode = document) {
  raiz.querySelectorAll<HTMLElement>('i[data-i]').forEach((el) => { el.outerHTML = ico(el.dataset.i!, el.className); });
  raiz.querySelectorAll('svg.ico').forEach((s) => s.querySelectorAll('path, circle').forEach((p) => p.setAttribute('pathLength', '1')));
}
