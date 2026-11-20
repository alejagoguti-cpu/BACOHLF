import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ───────────────────────── datos ─────────────────────────
interface Cat { nombre: string; vOff: number; vLen: number; tOff: number; tLen: number }
interface NivelInfo { i: number; nombre: string; elev: number; zmin: number; zmax: number; archivo: string; cats: Cat[] }
interface Manifest { fuente: string; extension: [number, number]; niveles: NivelInfo[] }

type Disc = 'Arquitectura' | 'Estructura';
const CATS: Record<string, { arq: string; tec: string; disc: Disc; cerr?: boolean; vidrio?: boolean; metal?: number; rough?: number; nombre: string }> = {
  muros:      { arq: '#ebe5d9', tec: '#f2f2ef', disc: 'Arquitectura', cerr: true, nombre: 'Muros' },
  ventanas:   { arq: '#7f98a6', tec: '#e8edf0', disc: 'Arquitectura', cerr: true, vidrio: true, nombre: 'Ventanas' },
  paneles:    { arq: '#d8d2c6', tec: '#eeeeea', disc: 'Arquitectura', cerr: true, nombre: 'Paneles' },
  puertas:    { arq: '#8a5a3b', tec: '#ecebe6', disc: 'Arquitectura', nombre: 'Puertas' },
  montantes:  { arq: '#3a3d41', tec: '#c9ccd0', disc: 'Arquitectura', metal: .6, rough: .4, nombre: 'Montantes' },
  barandas:   { arq: '#3a3d41', tec: '#c9ccd0', disc: 'Arquitectura', metal: .6, rough: .4, nombre: 'Barandas' },
  escaleras:  { arq: '#b4afa5', tec: '#e4e4e0', disc: 'Arquitectura', nombre: 'Escaleras' },
  cubiertas:  { arq: '#a5563b', tec: '#e9e7e2', disc: 'Arquitectura', cerr: true, nombre: 'Cubiertas' },
  losas:      { arq: '#bcb7ae', tec: '#dfe4ea', disc: 'Estructura', nombre: 'Losas' },
  columnas:   { arq: '#c8c3b9', tec: '#cfd8e2', disc: 'Estructura', nombre: 'Columnas' },
  vigas:      { arq: '#c8c3b9', tec: '#cfd8e2', disc: 'Estructura', nombre: 'Vigas' },
};
/** Disciplinas MEP: existen en 1001_Hotel_la_fotona_redes.rvt pero aún no se han exportado a la web. */
const MEP = ['Eléctrica', 'Hidrosanitaria (AF / ACS / SAN)', 'Red contra incendios'];
const ETAPAS = [
  ['00', 'Base existente', 'Proveedor externo · LOD 300'],
  ['A', 'Estructurar', 'BEP y contratación · 1 mes'],
  ['B', 'Coordinar', 'Diseños LOD 400 · 2 meses'],
  ['C', 'Construir', 'Seguimiento BIM · 8 meses'],
  ['D', 'Entregar', 'As-built y gemelo · 1 mes'],
];

// ───────────────────────── escena ─────────────────────────
const canvas = document.getElementById('gl') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(2, devicePixelRatio));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.localClippingEnabled = true;

const scene = new THREE.Scene();
const PAPEL = new THREE.Color('#f3f1ec');
scene.background = PAPEL.clone();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.HemisphereLight('#fbf7ef', '#9a958c', 0.9));
const sol = new THREE.DirectionalLight('#fff3df', 2.4);
sol.position.set(60, 90, 40);
sol.castShadow = true;
sol.shadow.mapSize.set(2048, 2048);
Object.assign(sol.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, near: 10, far: 260 });
sol.shadow.bias = -0.0005;
scene.add(sol);
const suelo = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.ShadowMaterial({ opacity: 0.16 }));
suelo.rotation.x = -Math.PI / 2; suelo.position.y = -1.25; suelo.receiveShadow = true;
scene.add(suelo);
const grilla = new THREE.GridHelper(400, 80, 0xb9b4aa, 0xd9d5cc);
(grilla.material as THREE.Material).transparent = true; (grilla.material as THREE.Material).opacity = 0;
grilla.position.y = -1.24; scene.add(grilla);

const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.5, 4000);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.495; controls.minDistance = 8; controls.maxDistance = 1200;
controls.enabled = false;

const corte = new THREE.Plane(new THREE.Vector3(0, -1, 0), 999);
const ACENTO = new THREE.Color('#b8843f');

// ───────────────────────── estado ─────────────────────────
/** Estado visual completo. En el recorrido lo escribe la timeline (scroll); en modo libre, gsap/la UI. */
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
};
type Estado = typeof S;

interface Nivel { info: NivelInfo; grupo: THREE.Group; mats: Map<string, THREE.MeshStandardMaterial>; lineas: THREE.LineBasicMaterial; caja: THREE.Box3; destino: number; vis: number; hl: number }
const niveles: Nivel[] = [];
const pickables: THREE.Mesh[] = [];
const catsVisibles = new Set(Object.keys(CATS));
let modo: 'cine' | 'libre' = 'cine';

const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector(s) as T;
const ss = (a: number, b: number, x: number) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// ───────────────────────── carga ─────────────────────────
async function cargar() {
  const man: Manifest = await (await fetch('data/manifest.json')).json();
  let hechos = 0;
  await Promise.all(man.niveles.map(async (info) => {
    const buf = await (await fetch('data/' + info.archivo)).arrayBuffer();
    const grupo = new THREE.Group(); grupo.name = info.nombre;
    const mats = new Map<string, THREE.MeshStandardMaterial>();
    const lineas = new THREE.LineBasicMaterial({ color: '#2a2d31', transparent: true, opacity: 0, depthWrite: false, clippingPlanes: [corte] });
    const caja = new THREE.Box3();
    for (const c of info.cats) {
      const def = CATS[c.nombre]; if (!def) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf, c.vOff, c.vLen), 3));
      g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, c.tOff, c.tLen), 1));
      g.computeBoundingBox(); caja.union(g.boundingBox!);
      const m = new THREE.MeshStandardMaterial({
        color: def.arq, roughness: def.rough ?? (def.vidrio ? 0.08 : 0.88), metalness: def.metal ?? (def.vidrio ? 0.2 : 0),
        flatShading: true, side: THREE.DoubleSide, transparent: !!def.vidrio, opacity: def.vidrio ? 0.5 : 1, clippingPlanes: [corte],
      });
      m.userData = { def };
      const mesh = new THREE.Mesh(g, m);
      mesh.castShadow = !def.vidrio; mesh.receiveShadow = true;
      mesh.userData = { nivel: niveles.length, cat: c.nombre, tris: c.tLen / 3 };
      mesh.name = c.nombre;
      grupo.add(mesh);
      const ed = new THREE.LineSegments(new THREE.EdgesGeometry(g, 28), lineas);
      ed.userData = { cat: c.nombre }; ed.raycast = () => {};
      grupo.add(ed);
      mats.set(c.nombre, m);
    }
    niveles[info.i] = { info, grupo, mats, lineas, caja, destino: 0, vis: 1, hl: 0 };
    scene.add(grupo);
    hechos++; ($('#cargando i')).style.width = (100 * hechos / man.niveles.length) + '%';
  }));
  niveles.forEach((n, i) => n.grupo.children.forEach((o) => { if ((o as THREE.Mesh).isMesh) { o.userData.nivel = i; pickables.push(o as THREE.Mesh); } }));
  // separación final de cada nivel en la axonometría explotada
  niveles.forEach((n, i) => { n.destino = i * 9 + (n.info.nombre === "CUBIERTA" ? 8 : 0); });
  return man;
}

// ───────────────────────── aplicar estado ─────────────────────────
const tmpC = new THREE.Color();
function aplicar(st: Estado) {
  // explosión escalonada: cubierta (20–45 %), plantas altas (45–70 %), todas (70–100 %)
  const e = st.explode, nTop = niveles.length - 1;
  niveles.forEach((n, i) => {
    const w = i === nTop ? ss(0.2, 0.45, e) : i >= 3 ? ss(0.45, 0.7, e) : ss(0.7, 1, e);
    n.grupo.position.y = n.destino * w;
    const visNivel = THREE.MathUtils.clamp(st.verHasta - i + 1, 0, 1);
    const dim = st.sel >= 0 && st.sel !== i ? 1 - 0.85 * st.dimOtros : 1;
    n.vis = visNivel * dim;
    n.grupo.visible = n.vis > 0.01;
    n.hl = THREE.MathUtils.lerp(n.hl, st.sel === i ? 1 : 0, 0.12);
    for (const [cat, m] of n.mats) {
      const def = m.userData.def as typeof CATS[string];
      m.color.copy(tmpC.set(def.arq)).lerp(new THREE.Color(def.tec), st.bim);
      let op = def.vidrio ? THREE.MathUtils.lerp(0.5, 0.35, st.bim) : 1;
      if (def.cerr) op *= THREE.MathUtils.lerp(1, def.vidrio ? 0.25 : 0.14, st.cerr);
      op *= n.vis;
      m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.6;
      m.emissive.copy(ACENTO).multiplyScalar(0.35 * n.hl);
      m.visible = catsVisibles.has(cat);
    }
    n.lineas.opacity = st.bordes * n.vis;
    n.lineas.color.set('#7d8086').lerp(new THREE.Color('#111214'), st.tinta);
    n.grupo.children.forEach((o) => { if ((o as THREE.LineSegments).isLineSegments) o.visible = st.bordes > 0.01 && catsVisibles.has(o.userData.cat); });
  });
  corte.constant = st.corteY;
  (grilla.material as THREE.Material).opacity = 0.6 * st.grilla;
  (suelo.material as THREE.ShadowMaterial).opacity = 0.16 * (1 - st.orto) * (1 - st.bim * 0.6);
  sol.intensity = THREE.MathUtils.lerp(2.4, 1.2, st.bim);
}

const objetivo = new THREE.Vector3();
function camaraDesde(st: Estado) {
  objetivo.set(st.tx, st.ty, st.tz);
  const az = THREE.MathUtils.degToRad(st.az), el = THREE.MathUtils.degToRad(st.el);
  // dolly-zoom: al cerrar el FOV se aleja la cámara para conservar el encuadre → proyección casi ortográfica
  const fov = THREE.MathUtils.lerp(35, 2.2, st.orto);
  const k = Math.tan(THREE.MathUtils.degToRad(17.5)) / Math.tan(THREE.MathUtils.degToRad(fov / 2));
  const d = st.dist * k;
  camera.position.set(objetivo.x + d * Math.cos(el) * Math.sin(az), objetivo.y + d * Math.sin(el), objetivo.z + d * Math.cos(el) * Math.cos(az));
  camera.fov = fov; camera.near = Math.max(0.5, d * 0.02); camera.far = d * 6 + 400;
  camera.updateProjectionMatrix();
  camera.lookAt(objetivo);
}

// ───────────────────────── etiquetas 3D ─────────────────────────
interface Etq { el: HTMLDivElement; pos: () => THREE.Vector3; vis: () => number; click?: () => void }
const etiquetas: Etq[] = [];
function etiqueta(txt: string, pos: Etq['pos'], vis: Etq['vis'], click?: () => void) {
  const el = document.createElement('div'); el.className = 'etq'; el.textContent = txt;
  if (click) el.addEventListener('click', click);
  $('#etiquetas').appendChild(el); etiquetas.push({ el, pos, vis, click });
  return el;
}
const pv = new THREE.Vector3();
function actualizarEtiquetas() {
  for (const t of etiquetas) {
    const a = t.vis();
    if (a < 0.02) { t.el.style.opacity = '0'; t.el.style.pointerEvents = 'none'; continue; }
    pv.copy(t.pos()).project(camera);
    if (pv.z > 1) { t.el.style.opacity = '0'; continue; }
    t.el.style.left = ((pv.x + 1) / 2 * innerWidth) + 'px';
    t.el.style.top = ((1 - pv.y) / 2 * innerHeight - 18) + 'px';
    t.el.style.opacity = String(a); t.el.style.pointerEvents = 'auto';
  }
}

// ───────────────────────── recorrido (MODO A) ─────────────────────────
let tl: gsap.core.Timeline; let st: ScrollTrigger;
const ESC = 10; // unidades de timeline por escena
let escenaActual = 1;
function construirRecorrido() {
  const nivelP2 = niveles.findIndex((n) => n.info.nombre === 'PISO 2');
  const elevP2 = niveles[nivelP2]?.info.elev ?? 3;
  const cut = elevP2 + 1.6;
  tl = gsap.timeline({ defaults: { ease: 'none' }, paused: true });
  const T = (obj: object, at: number, dur: number) => tl.to(S, { ...obj, duration: dur }, at);

  // 01 · El hotel emerge — avance, desplazamiento lateral, elevación
  T({ dist: 84 }, 0, 2.5);
  T({ az: -38 }, 2.5, 3.5);
  T({ el: 38, dist: 112, ty: 6 }, 6, 4);
  tl.to('.titulo', { xPercent: -38, opacity: 0.25, duration: 3.5 }, 2.5);

  // 02 · Vista aérea oblicua + órbita parcial; etiquetas ancladas
  T({ el: 58, dist: 150, az: -10, ty: 4 }, 10, 4);
  T({ az: 52 }, 14, 6);
  T({ grilla: 1 }, 10, 3);

  // 03 · Explosión arquitectónica (axonometría)
  T({ az: 45, el: 30, dist: 165, ty: 22 }, 20, 3);
  T({ explode: 1, dist: 190, ty: 30 }, 22, 8);

  // 04 · Entrar al edificio (Piso 2)
  T({ explode: 0 }, 30, 3);
  T({ verHasta: nivelP2, ty: elevP2 }, 31.5, 3);
  T({ corteY: cut }, 32.5, 2.5);
  T({ az: 28, el: 42, dist: 72 }, 32, 4);
  T({ az: -18, el: 36, dist: 50 }, 36, 4);

  // 05 · Arquitectura → BIM
  T({ verHasta: 9, corteY: 999, ty: 9 }, 40, 2);
  T({ az: 45, el: 28, dist: 130 }, 40, 3);
  T({ bim: 1, bordes: 0.55 }, 43, 3);
  T({ cerr: 1 }, 46, 2);
  T({ az: 70 }, 46, 4);

  // 06 · Del edificio al plano
  T({ verHasta: nivelP2, corteY: cut, cerr: 0, ty: elevP2 }, 50, 2);
  T({ az: 0, el: 89.5, dist: 105, tx: 0, tz: 0 }, 50, 5);
  T({ bordes: 1, tinta: 1, grilla: 0 }, 52, 4);
  T({ orto: 1 }, 53, 5);

  // 07 · Remodelación — vuelve a la representación realista
  T({ orto: 0, bim: 0, bordes: 0, tinta: 0, verHasta: 9, corteY: 999 }, 60, 3);
  T({ az: 70, el: 20, dist: 120, ty: 9 }, 60, 4);
  T({ az: 105 }, 64, 6);

  // 08 · Ruta BACO
  T({ az: 140, el: 24, dist: 135 }, 70, 10);

  // textos por escena
  const N = 8;
  for (let e = 1; e <= N; e++) {
    const el = `.escena[data-e="${e}"]`, a = (e - 1) * ESC;
    if (e === 1) gsap.set(el, { autoAlpha: 1 });
    else tl.fromTo(el, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1 }, a + 0.3);
    if (e < N) tl.to(el, { autoAlpha: 0, y: -40, duration: 1 }, a + ESC - 1.2);
  }
  tl.set({}, {}, N * ESC);

  // marcas de progreso
  const nombres = ['Emerge', 'Edificación', 'Explosión', 'Interior', 'BIM', 'Plano', 'Remodelación', 'Ruta BACO'];
  $('#marcas').innerHTML = nombres.map((n, i) => `<li style="top:${(i / N) * 100}%">${String(i + 1).padStart(2, '0')} ${n}</li>`).join('');

  st = ScrollTrigger.create({
    trigger: '#escenario', start: 'top top', end: () => '+=' + innerHeight * 14,
    pin: true, anticipatePin: 1, scrub: true, invalidateOnRefresh: true, animation: tl,
    onUpdate: (self) => {
      ($('#progreso i')).style.height = (self.progress * 100) + '%';
      escenaActual = Math.min(N, Math.floor(self.progress * N) + 1);
    },
  });
}

// ───────────────────────── exploración libre (MODO B) ─────────────────────────
let scrollGuardado = 0;
function volar(pos: THREE.Vector3, tgt: THREE.Vector3, dur = 1.4) {
  gsap.to(camera.position, { x: pos.x, y: pos.y, z: pos.z, duration: dur, ease: 'power2.inOut' });
  gsap.to(controls.target, { x: tgt.x, y: tgt.y, z: tgt.z, duration: dur, ease: 'power2.inOut' });
}
function entrarLibre(focoNivel?: number) {
  if (modo === 'libre') { if (focoNivel !== undefined) enfocarNivel(focoNivel); return; }
  modo = 'libre'; document.body.dataset.modo = 'libre';
  document.querySelectorAll('.modos button').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.modo === 'libre'));
  scrollGuardado = scrollY; st.disable(false);
  document.documentElement.style.overflow = 'hidden';
  controls.target.copy(objetivo); controls.enabled = true; controls.update();
  gsap.to(S, { orto: 0, duration: 0.8 });
  $('#volver').hidden = false;
  if (focoNivel !== undefined) enfocarNivel(focoNivel);
  else gsap.to(S, { explode: 0, cerr: 0, bim: 0, bordes: 0, tinta: 0, verHasta: 9, corteY: 999, sel: -1, dimOtros: 0, duration: 1 });
  pintarPanel();
}
function salirLibre() {
  if (modo === 'cine') return;
  modo = 'cine'; document.body.dataset.modo = 'cine';
  document.querySelectorAll('.modos button').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.modo === 'cine'));
  controls.enabled = false; $('#volver').hidden = true; $('#ficha').classList.remove('on');
  catsVisibles.clear(); Object.keys(CATS).forEach((c) => catsVisibles.add(c));
  document.documentElement.style.overflow = '';
  S.sel = -1; S.dimOtros = 0;
  st.enable(); window.scrollTo(0, scrollGuardado); st.update(); tl.progress(st.progress);
}

let nivelSel = -1;
function enfocarNivel(i: number) {
  nivelSel = i;
  const n = niveles[i]; const elev = n.info.elev;
  const c = n.caja.getCenter(new THREE.Vector3());
  // 1) se ilumina la planta y se atenúan las demás; la cámara se acerca
  gsap.to(S, { sel: i, dimOtros: 1, explode: S.explode > 0.5 ? 1 : 0, duration: 0.6, overwrite: 'auto' });
  const yN = n.grupo.position.y + elev;
  volar(new THREE.Vector3(c.x + 46, yN + 34, c.z + 52), new THREE.Vector3(c.x, yN, c.z));
  // 2) se activa la exploración del nivel: se retiran los superiores y se corta a 1,60 m
  gsap.to(S, { explode: 0, verHasta: i, corteY: elev + 1.6, dimOtros: 0, duration: 1.2, delay: 1.1, ease: 'power2.inOut', overwrite: false });
  setTimeout(() => volar(new THREE.Vector3(c.x + 30, elev + 26, c.z + 34), new THREE.Vector3(c.x, elev, c.z)), 1100);
  pintarPanel();
}
function verTodo() {
  nivelSel = -1;
  gsap.to(S, { sel: -1, dimOtros: 0, verHasta: 9, corteY: 999, duration: 1 });
  volar(new THREE.Vector3(85, 60, 95), new THREE.Vector3(0, 9, 0));
  pintarPanel();
}
function vista(v: string) {
  document.querySelectorAll('.vistas button').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.v === v || ((b as HTMLElement).dataset.v === 'explotar' && S.explode > 0.5 && v !== 'explotar')));
  if (v !== 'plano' && S.orto > 0.01) { // salir de la planta: vuelve la perspectiva
    gsap.to(S, { orto: 0, verHasta: 9, corteY: 999, duration: 1.2 });
    volar(new THREE.Vector3(85, 60, 95), new THREE.Vector3(0, 9, 0));
  }
  if (v === 'arq') gsap.to(S, { bim: 0, cerr: 0, bordes: 0, tinta: 0, duration: 1 });
  if (v === 'bim') gsap.to(S, { bim: 1, cerr: 1, bordes: 0.55, tinta: 0, duration: 1 });
  if (v === 'explotar') {
    const abrir = S.explode < 0.5;
    gsap.to(S, { explode: abrir ? 1 : 0, verHasta: 9, corteY: 999, duration: 2, ease: 'power1.inOut' });
    volar(new THREE.Vector3(95, abrir ? 85 : 60, 105), new THREE.Vector3(0, abrir ? 28 : 9, 0), 2);
  }
  if (v === 'plano') {
    const i = nivelSel >= 0 ? nivelSel : niveles.findIndex((n) => n.info.nombre === 'PISO 2');
    const elev = niveles[i].info.elev; nivelSel = i;
    gsap.to(S, { explode: 0, bim: 1, cerr: 0, bordes: 1, tinta: 1, verHasta: i, corteY: elev + 1.6, sel: -1, dimOtros: 0, orto: 1, duration: 1.6 });
    // FOV 5° (casi ortográfica): distancia para encuadrar ~90 m de planta
    const d = 45 / Math.tan(THREE.MathUtils.degToRad(2.5));
    volar(new THREE.Vector3(0, elev + d, 0.01), new THREE.Vector3(0, elev, 0), 1.6);
    pintarPanel();
  }
}

function pintarPanel() {
  $('#listaNiveles').innerHTML = `<li data-n="-1" class="${nivelSel < 0 ? 'sel' : ''}">Edificio completo</li>` +
    niveles.map((n, i) => `<li data-n="${i}" class="${nivelSel === i ? 'sel' : ''}">${n.info.nombre}<small>+${n.info.elev.toFixed(2)} m</small></li>`).join('');
  const discs: Disc[] = ['Arquitectura', 'Estructura'];
  $('#listaDisc').innerHTML = discs.map((d) => {
    const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
    return `<li data-d="${d}" class="${on ? '' : 'off'}">${d}<small>${on ? 'visible' : 'oculta'}</small></li>`;
  }).join('') + MEP.map((m) => `<li class="nd" title="Pendiente: exportar de 1001_Hotel_la_fotona_redes.rvt">${m}<small>sin exportar</small></li>`).join('');
  $('#listaCats').innerHTML = Object.entries(CATS).filter(([c]) => niveles.some((n) => n.mats.has(c)))
    .map(([c, v]) => `<li data-c="${c}" class="${catsVisibles.has(c) ? '' : 'off'}">${v.nombre}<small>${v.disc}</small></li>`).join('');
}

// ───────────────────────── selección ─────────────────────────
const ray = new THREE.Raycaster(); const ptr = new THREE.Vector2();
function pick(ev: PointerEvent) {
  ptr.set(ev.clientX / innerWidth * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ptr, camera);
  const hits = ray.intersectObjects(pickables.filter((m) => (m.material as THREE.Material).visible && niveles[m.userData.nivel].vis > 0.3), false);
  // descarta lo que queda por encima del plano de corte
  return hits.find((h) => h.point.y <= corte.constant + 0.01);
}
let downAt = 0;
canvas.addEventListener('pointerdown', () => { downAt = performance.now(); });
canvas.addEventListener('pointerup', (ev) => {
  if (performance.now() - downAt > 300) return; // fue un arrastre
  const h = pick(ev); if (!h) return;
  const i = h.object.userData.nivel as number;
  if (modo === 'cine') {
    if (escenaActual === 2) entrarLibre();
    else if (escenaActual === 3) entrarLibre(i);
    return;
  }
  const cat = h.object.userData.cat as string; const n = niveles[i];
  $('#ficha').innerHTML = `<h4>${n.info.nombre} · ${CATS[cat].nombre}</h4><dl>
    <dt>Disciplina</dt><dd>${CATS[cat].disc}</dd>
    <dt>Nivel</dt><dd>${n.info.nombre} (+${n.info.elev.toFixed(2)} m)</dd>
    <dt>Punto</dt><dd>z = ${(h.point.y - n.grupo.position.y).toFixed(2)} m</dd>
    <dt>Geometría</dt><dd>${h.object.userData.tris.toLocaleString('es-CO')} triángulos en la categoría</dd>
    <dt>Fuente</dt><dd>HLF_P2-P6.rvt</dd></dl>`;
  $('#ficha').classList.add('on');
  if (nivelSel !== i) enfocarNivel(i);
});
canvas.addEventListener('pointermove', (ev) => {
  const activo = modo === 'libre' || escenaActual === 2 || escenaActual === 3;
  const h = activo ? pick(ev) : undefined;
  canvas.style.cursor = h ? 'pointer' : '';
  if (modo === 'cine' && escenaActual === 3) S.sel = h ? h.object.userData.nivel : -1;
});

// ───────────────────────── UI ─────────────────────────
function ui() {
  document.querySelectorAll<HTMLButtonElement>('.modos button').forEach((b) => b.addEventListener('click', () => b.dataset.modo === 'libre' ? entrarLibre() : salirLibre()));
  $('#volver').addEventListener('click', salirLibre);
  document.querySelectorAll<HTMLButtonElement>('.vistas button').forEach((b) => b.addEventListener('click', () => vista(b.dataset.v!)));
  $('#listaNiveles').addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest('li'); if (!li) return;
    const n = +li.dataset.n!; n < 0 ? verTodo() : enfocarNivel(n);
  });
  $('#listaDisc').addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest('li'); if (!li?.dataset.d) return;
    const cats = Object.entries(CATS).filter(([, v]) => v.disc === li.dataset.d).map(([c]) => c);
    const on = cats.some((c) => catsVisibles.has(c));
    cats.forEach((c) => on ? catsVisibles.delete(c) : catsVisibles.add(c));
    if (!on) gsap.fromTo(S, { bordes: Math.max(S.bordes, 0.8) }, { bordes: S.bim > 0.5 ? 0.55 : 0, duration: 1.4 });
    pintarPanel();
  });
  $('#listaCats').addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest('li'); if (!li?.dataset.c) return;
    const c = li.dataset.c; catsVisibles.has(c) ? catsVisibles.delete(c) : catsVisibles.add(c); pintarPanel();
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && modo === 'libre') salirLibre(); });
  $('#etapas').innerHTML = ETAPAS.map(([k, t, d]) => `<div class="etapa"><b>${k}</b><strong>${t}</strong><span>${d}</span></div>`).join('');
  $('#notaMep').textContent = 'Redes MEP (eléctrica, hidrosanitaria, RCI): están modeladas en 1001_Hotel_la_fotona_redes.rvt y se incorporarán al exportarlas. Aquí no se simulan.';
  $('#notaRemodel').textContent = 'La comparación con clipping necesita dos modelos: el de condiciones existentes (LOD 300, a cargo del proveedor de escaneo según la propuesta) y el de remodelación. Por ahora solo está cargado el modelo de remodelación HLF_P2-P6.';
}

// ───────────────────────── bucle ─────────────────────────
function resize() {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
addEventListener('resize', resize);
function frame() {
  aplicar(S);
  if (modo === 'cine') camaraDesde(S);
  else { controls.update(); camera.fov = THREE.MathUtils.lerp(35, 5, S.orto); camera.near = 0.5 + 20 * S.orto; camera.far = 4000; camera.updateProjectionMatrix(); }
  actualizarEtiquetas();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

(async () => {
  await cargar();
  ui();
  // etiquetas: edificio (escena 02) y niveles (escena 03 / exploración)
  const total = new THREE.Box3(); niveles.forEach((n) => total.union(n.caja));
  etiqueta('HLF P2–P6 · modelo Revit', () => new THREE.Vector3(0, total.max.y + 2, 0),
    () => modo === 'cine' && escenaActual === 2 ? 1 : 0, () => entrarLibre());
  niveles.forEach((n, i) => etiqueta(n.info.nombre, () => new THREE.Vector3(n.caja.max.x, n.info.elev + n.grupo.position.y + 1.5, n.caja.getCenter(pv).z),
    () => (modo === 'cine' && escenaActual === 3 ? ss(0.6, 0.9, S.explode) : 0) || (modo === 'libre' && S.explode > 0.6 ? n.vis : 0),
    () => entrarLibre(i)));
  construirRecorrido();
  pintarPanel();
  $('#cargando').classList.add('fin');
  frame();
})();
