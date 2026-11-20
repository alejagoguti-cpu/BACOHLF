// ───────────────────────── nube de escaneo + punto crítico ─────────────────────────
const nubes: THREE.Points[] = [];
/** Muestrea las superficies reales del modelo (muros, ventanas, losas, cubiertas) como una nube de puntos de escaneo. */
function crearNubes() {
  const fuente = ['muros', 'ventanas', 'losas', 'cubiertas', 'paneles', 'columnas'];
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3();
  niveles.forEach((n) => {
    const pts: number[] = [];
    n.grupo.children.forEach((o) => {
      const mesh = o as THREE.Mesh; if (!mesh.isMesh || !fuente.includes(mesh.name)) return;
      const g = mesh.geometry as THREE.BufferGeometry; const p = g.getAttribute('position'); const idx = g.index;
      const nt = idx ? idx.count / 3 : p.count / 3;
      for (let t = 0; t < nt; t++) {
        const ia = idx ? idx.getX(t * 3) : t * 3, ib = idx ? idx.getX(t * 3 + 1) : t * 3 + 1, ic = idx ? idx.getX(t * 3 + 2) : t * 3 + 2;
        a.fromBufferAttribute(p, ia); b.fromBufferAttribute(p, ib); c.fromBufferAttribute(p, ic);
        const area = ab.subVectors(b, a).cross(ac.subVectors(c, a)).length() / 2;
        let k = area * 2.2; // ≈ 2 puntos por m²
        while (k > 0) {
          if (k < 1 && Math.random() > k) break;
          let u = Math.random(), v = Math.random(); if (u + v > 1) { u = 1 - u; v = 1 - v; }
          pts.push(a.x + (b.x - a.x) * u + (c.x - a.x) * v, a.y + (b.y - a.y) * u + (c.y - a.y) * v, a.z + (b.z - a.z) * u + (c.z - a.z) * v);
          k--;
        }
      }
    });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const m = new THREE.PointsMaterial({ color: '#e6c766', size: 0.16, sizeAttenuation: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    const nube = new THREE.Points(g, m); nube.raycast = () => {}; nube.visible = false;
    n.grupo.add(nube); nubes.push(nube);
  });
}

/** Punto crítico REAL: la menor separación entre la red contra incendios y el conduit eléctrico del Piso 2. */
const critico = { p: new THREE.Vector3(), d: Infinity, ok: false };
let marcaCritico: THREE.Mesh | null = null;
function buscarPuntoCritico() {
  const p2 = niveles.find((n) => n.info.nombre === 'PISO 2'); if (!p2) return;
  const get = (nombre: string) => p2.grupo.children.find((o) => o.name === nombre && (o as THREE.Mesh).isMesh) as THREE.Mesh | undefined;
  const rci = get('rci'), con = get('conduit'); if (!rci || !con) return;
  const C = 0.25; const celdas = new Map<string, number[]>();
  const pc = con.geometry.getAttribute('position');
  for (let i = 0; i < pc.count; i++) {
    const k = `${Math.floor(pc.getX(i) / C)},${Math.floor(pc.getY(i) / C)},${Math.floor(pc.getZ(i) / C)}`;
    (celdas.get(k) ?? celdas.set(k, []).get(k)!).push(i);
  }
  const pr = rci.geometry.getAttribute('position'); const v = new THREE.Vector3(), w = new THREE.Vector3();
  for (let i = 0; i < pr.count; i++) {
    v.fromBufferAttribute(pr, i); if (v.y > 6.5) continue;
    const cx = Math.floor(v.x / C), cy = Math.floor(v.y / C), cz = Math.floor(v.z / C);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      const l = celdas.get(`${cx + dx},${cy + dy},${cz + dz}`); if (!l) continue;
      for (const j of l) { w.fromBufferAttribute(pc, j); const d = v.distanceTo(w); if (d < critico.d) { critico.d = d; critico.p.copy(v).add(w).multiplyScalar(0.5); critico.ok = true; } }
    }
  }
  if (!critico.ok) return;
  marcaCritico = new THREE.Mesh(new THREE.SphereGeometry(0.45, 32, 16), new THREE.MeshBasicMaterial({ color: '#e0412f', transparent: true, opacity: 0, depthTest: false }));
  marcaCritico.position.copy(critico.p); marcaCritico.renderOrder = 10; marcaCritico.raycast = () => {};
  p2.grupo.add(marcaCritico);
}

// ───────────────────────── aplicar estado ─────────────────────────
const tmpC = new THREE.Color();
const NAVY = new THREE.Color('#0e3064');
function aplicar(st: Estado) {
  const e = st.explode, nTop = niveles.length - 1, N = niveles.length;
  const tiempo = performance.now() / 1000;
  niveles.forEach((n, i) => {
    const w = i === nTop ? ss(0.2, 0.45, e) : i >= 3 ? ss(0.45, 0.7, e) : ss(0.7, 1, e);
    n.grupo.position.y = n.destino * w;
    const visNivel = THREE.MathUtils.clamp(st.verHasta - i + 1, 0, 1);
    const dim = st.sel >= 0 && st.sel !== i ? 1 - 0.85 * st.dimOtros : 1;
    n.vis = visNivel * dim;
    n.grupo.visible = n.vis > 0.01;
    n.hl = THREE.MathUtils.lerp(n.hl, st.sel === i ? 1 : 0, 0.12);
    // construcción por niveles: cada piso pasa de modelo técnico a obra terminada, con un destello dorado al "construirse"
    const hecho = ss(i / N, (i + 1) / N, st.obra);
    const bimN = Math.max(st.bim, 1 - hecho);
    const destello = Math.sin(Math.PI * hecho) * (st.obra < 0.999 ? 1 : 0);
    const solido = 1 - st.nube;
    for (const [cat, m] of n.mats) {
      const def = m.userData.def as typeof CATS[string];
      m.color.copy(tmpC.set(def.arq)).lerp(new THREE.Color(def.tec), def.mep ? 0 : bimN);
      let op = def.vidrio ? THREE.MathUtils.lerp(0.5, 0.35, bimN) : 1;
      if (def.cerr) op *= THREE.MathUtils.lerp(1, def.vidrio ? 0.25 : 0.14, st.cerr);
      if (def.mep) op *= st.mep;
      op *= n.vis * solido;
      m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.6;
      if (def.mep) m.emissive.set(def.arq).multiplyScalar(0.6);
      else m.emissive.copy(ACENTO).multiplyScalar(0.35 * n.hl + 0.9 * destello);
      m.visible = catsVisibles.has(cat) && (!def.mep || st.mep > 0.01) && op > 0.005;
      if (m.userData.uMapa) { m.userData.uMapa.value = 1 - bimN; m.normalScale.setScalar(1 - bimN); }
    }
    n.lineas.opacity = Math.max(st.bordes, 0.45 * (1 - hecho) * (1 - st.nube)) * n.vis;
    n.lineas.color.set('#6a7d99').lerp(new THREE.Color('#0e3064'), st.tinta);
    const verLineas = n.lineas.opacity > 0.01;
    n.grupo.children.forEach((o) => { if ((o as THREE.LineSegments).isLineSegments) o.visible = verLineas && catsVisibles.has(o.userData.cat); });
    // nube de escaneo con brillo que respira
    const nube = nubes[i];
    if (nube) { const pm = nube.material as THREE.PointsMaterial; pm.opacity = st.nube * n.vis * (0.75 + 0.25 * Math.sin(tiempo * 2 + i)); nube.visible = pm.opacity > 0.01; }
  });
  // redes trazadas tubo a tubo
  const p2 = niveles.find((n) => n.info.nombre === 'PISO 2');
  p2?.grupo.children.forEach((o) => { if (o.userData.mep) { const g = (o as THREE.Mesh).geometry; const c = g.index!.count; g.setDrawRange(0, Math.floor((c * st.dibujo) / 3) * 3); } });
  if (marcaCritico) {
    const mm = marcaCritico.material as THREE.MeshBasicMaterial;
    mm.opacity = st.alerta * (0.55 + 0.35 * Math.sin(tiempo * 6)); marcaCritico.visible = mm.opacity > 0.01;
    marcaCritico.scale.setScalar(1 + 0.35 * Math.sin(tiempo * 3));
  }
  corte.constant = st.corteY;
  (grilla.material as THREE.Material).opacity = 0.6 * st.grilla;
  (suelo.material as THREE.ShadowMaterial).opacity = 0.16 * (1 - st.orto) * (1 - st.bim * 0.6) * (1 - st.noche);
  sol.intensity = THREE.MathUtils.lerp(2.4, 1.2, st.bim);
  ctxGrupo.visible = st.ctx > 0.01;
  for (const m of ctxMats) { const op = m.userData.baseOp * st.ctx; m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.5; }
  (scene.background as THREE.Color).copy(PAPEL).lerp(NAVY, st.noche);
  niebla.color.copy(scene.background as THREE.Color);
  scene.fog = hayContexto && st.orto < 0.05 ? niebla : null;
}
