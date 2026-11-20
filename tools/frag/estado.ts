const S = {
  az: 40, el: 16, dist: 118, tx: 0, ty: 9, tz: 0, // cámara esférica alrededor del objetivo
  orto: 0,       // 0 perspectiva → 1 casi ortográfica (dolly-zoom)
  explode: 0,    // 0 edificio completo → 1 axonometría explotada
  bim: 0,        // 0 materiales → 1 representación técnica neutra
  cerr: 0,       // 0 cerramientos opacos → 1 transparentes
  bordes: 0,     // opacidad de aristas técnicas
  tinta: 0,      // 0 aristas grises → 1 aristas negras (plano)
  corteY: 999,   // altura del plano de corte (m)
  verHasta: 9,   // niveles con índice > verHasta se ocultan
  sel: -1,       // nivel destacado (los demás se atenúan)
  dimOtros: 0,
  grilla: 0,
  ctx: 1,        // opacidad del contexto urbano
  shift: 0,
  mep: 0,        // 0 redes ocultas → 1 redes MEP visibles
  // ── premisa "construir antes de construir" ──
  nube: 0,       // 1 = la torre es una nube de puntos de escaneo (LOD 300)
  noche: 0,      // 1 = fondo azul Estelar (apertura)
  obra: 1,       // avance de la construcción: los niveles pasan de modelo técnico a obra, de abajo hacia arriba
  dibujo: 1,     // fracción dibujada de las redes MEP (se trazan tubo a tubo)
  alerta: 0,     // punto crítico real detectado en el modelo de redes
  mes: 0,        // reloj del proyecto (0–12)
};
