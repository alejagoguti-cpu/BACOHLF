import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { iniciarComercial } from './comercial';
import './comercial.css';

// ───────────────────────── datos ─────────────────────────
interface Cat { nombre: string; vOff: number; vLen: number; tOff?: number; tLen?: number; uvOff?: number; uvLen?: number }
interface NivelInfo { i: number; nombre: string; elev: number; zmin: number; zmax: number; archivo: string; cats: Cat[] }
interface Manifest { fuente: string; enu: { e: number; n: number; z: number }; extension: [number, number]; niveles: NivelInfo[] }

type Disc = 'Arquitectura' | 'Estructura' | 'Hidrosanitaria' | 'Red contra incendios' | 'Eléctrica' | 'Mecánica';
const DISCS: Disc[] = ['Arquitectura', 'Estructura', 'Hidrosanitaria', 'Red contra incendios', 'Eléctrica', 'Mecánica'];
const CATS: Record<string, { arq: string; tec: string; disc: Disc; cerr?: boolean; vidrio?: boolean; metal?: number; rough?: number; nombre: string; mep?: boolean }> = {
  muros:      { arq: '#dcae95', tec: '#f2f2ef', disc: 'Arquitectura', cerr: true, nombre: 'Muros' },
  ventanas:   { arq: '#7f98a6', tec: '#e8edf0', disc: 'Arquitectura', cerr: true, vidrio: true, nombre: 'Ventanas' },
  paneles:    { arq: '#d8d2c6', tec: '#eeeeea', disc: 'Arquitectura', cerr: true, nombre: 'Paneles' },
  puertas:    { arq: '#8a5a3b', tec: '#ecebe6', disc: 'Arquitectura', nombre: 'Puertas' },
  montantes:  { arq: '#3a3d41', tec: '#c9ccd0', disc: 'Arquitectura', metal: .6, rough: .4, nombre: 'Montantes' },
  barandas:   { arq: '#3a3d41', tec: '#c9ccd0', disc: 'Arquitectura', metal: .6, rough: .4, nombre: 'Barandas' },
  escaleras:  { arq: '#b4afa5', tec: '#e4e4e0', disc: 'Arquitectura', nombre: 'Escaleras' },
  cubiertas:  { arq: '#ffffff', tec: '#e9e7e2', disc: 'Arquitectura', cerr: true, nombre: 'Cubiertas' },
  losas:      { arq: '#bcb7ae', tec: '#dfe4ea', disc: 'Estructura', nombre: 'Losas' },
  columnas:   { arq: '#c8c3b9', tec: '#cfd8e2', disc: 'Estructura', nombre: 'Columnas' },
  vigas:      { arq: '#c8c3b9', tec: '#cfd8e2', disc: 'Estructura', nombre: 'Vigas' },
  // redes del Piso 2 (1001_Hotel_la_fotona_redes.rvt) · colores de las láminas técnicas
  af:         { arq: '#1f6fd1', tec: '#1f6fd1', disc: 'Hidrosanitaria', mep: true, rough: .45, nombre: 'Agua fría' },
  acs:        { arq: '#d23b2f', tec: '#d23b2f', disc: 'Hidrosanitaria', mep: true, rough: .45, nombre: 'Agua caliente' },
  san:        { arq: '#8a5a32', tec: '#8a5a32', disc: 'Hidrosanitaria', mep: true, rough: .6, nombre: 'Sanitaria' },
  sanitarios: { arq: '#f4f4f2', tec: '#f4f4f2', disc: 'Hidrosanitaria', mep: true, rough: .25, nombre: 'Aparatos sanitarios' },
  otras:      { arq: '#8b8f96', tec: '#8b8f96', disc: 'Hidrosanitaria', mep: true, nombre: 'Otras tuberías' },
  rci:        { arq: '#e8731a', tec: '#e8731a', disc: 'Red contra incendios', mep: true, rough: .45, nombre: 'Rociadores y red RCI' },
  conduit:    { arq: '#2a9d8f', tec: '#2a9d8f', disc: 'Eléctrica', mep: true, rough: .5, nombre: 'Conduit' },
  aparatos:   { arq: '#0e3064', tec: '#0e3064', disc: 'Eléctrica', mep: true, nombre: 'Tomas y aparatos' },
  luminarias: { arq: '#f2c230', tec: '#f2c230', disc: 'Eléctrica', mep: true, nombre: 'Luminarias' },
  ductos:     { arq: '#9aa3ad', tec: '#9aa3ad', disc: 'Mecánica', mep: true, metal: .5, rough: .4, nombre: 'Ductos' },
};
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
const PAPEL = new THREE.Color('#f7f4ef');
scene.background = PAPEL.clone();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.HemisphereLight('#fbf7ef', '#9a958c', 0.9));
const sol = new THREE.DirectionalLight('#fff3df', 2.4);
sol.position.set(70, 110, 50);
sol.castShadow = true;
sol.shadow.mapSize.set(2048, 2048);
Object.assign(sol.shadow.camera, { left: -110, right: 110, top: 110, bottom: -110, near: 10, far: 320 });
const niebla = new THREE.Fog('#f7f4ef', 280, 1100);
sol.shadow.bias = -0.0005;
scene.add(sol);
const suelo = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.ShadowMaterial({ opacity: 0.16 }));
suelo.rotation.x = -Math.PI / 2; suelo.position.y = -1.25; suelo.receiveShadow = true;
scene.add(suelo);
const grilla = new THREE.GridHelper(400, 80, 0xbfc8d1, 0xe4e8ec);
(grilla.material as THREE.Material).transparent = true; (grilla.material as THREE.Material).opacity = 0;
grilla.position.y = -1.24; scene.add(grilla);

const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.5, 4000);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.495; controls.minDistance = 8; controls.maxDistance = 1200;
controls.enabled = false;

const corte = new THREE.Plane(new THREE.Vector3(0, -1, 0), 999);
const ACENTO = new THREE.Color('#b59535');

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
  ctx: 1,        // opacidad del contexto urbano
  shift: 0,
  mep: 0,        // 0 redes ocultas → 1 redes MEP visibles
};
type Estado = typeof S;
/** Interacciones dentro del recorrido: se suman al estado de la timeline sin romper el scrub. */
const U = { corteExtra: 0, planoNivel: -1, px: 0, py: 0, tpx: 0, tpy: 0 };

interface Nivel { info: NivelInfo; grupo: THREE.Group; mats: Map<string, THREE.MeshStandardMaterial>; lineas: THREE.LineBasicMaterial; caja: THREE.Box3; destino: number; vis: number; hl: number }
const niveles: Nivel[] = [];
const pickables: THREE.Mesh[] = [];
const catsVisibles = new Set(Object.keys(CATS));
let modo: 'cine' | 'libre' = 'cine';

const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector(s) as T;
const ss = (a: number, b: number, x: number) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// ───────────────────────── texturas PBR (las mismas del visor HLF) ─────────────────────────
const texLoader = new THREE.TextureLoader();
function tex(url: string, metrosPorTile: number, srgb = true) {
  const t = texLoader.load(url);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1 / metrosPorTile, 1 / metrosPorTile); // las UV vienen en metros
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  return t;
}
const TEX = {
  // ladrillo a la vista del hotel (foto real): ≈ 5 hiladas por 1,28 m, como en HLF
  ladrillo: { map: tex('ctx/tex_ladrillo_hlf.webp', 1.28), normal: tex('ctx/tex_ladrillo_hlf_n.webp', 1.28, false) },
  teja: { map: tex('ctx/tex_teja.webp', 1.5), normal: null as THREE.Texture | null },
};
/** Permite pasar de material a representación técnica: uMapa 1 = textura, 0 = color plano. */
function conMezclaDeMapa(m: THREE.MeshStandardMaterial) {
  const u = { value: 1 };
  m.userData.uMapa = u;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uMapa = u;
    sh.fragmentShader = sh.fragmentShader
      .replace('void main() {', 'uniform float uMapa;\nvoid main() {')
      .replace('#include <map_fragment>', '#ifdef USE_MAP\n vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n diffuseColor *= mix(vec4(1.0), sampledDiffuseColor, uMapa);\n#endif');
  };
}

// ───────────────────────── contexto (terreno, vías, vecinos, resto del hotel) ─────────────────────────
const ctxGrupo = new THREE.Group(); ctxGrupo.name = 'contexto'; scene.add(ctxGrupo);
const ctxMats: THREE.MeshStandardMaterial[] = [];
let hayContexto = false;
function dentroDe(poly: [number, number][], x: number, y: number) {
  let r = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) r = !r;
  }
  return r;
}
async function cargarContexto(enu: Manifest['enu']) {
  ctxGrupo.position.set(-enu.e, -enu.z, enu.n); // los GLB de HLF están en ENU (x = E, y = cota, z = -N)
  const { huella } = await (await fetch('ctx/huella.json')).json() as { huella: [number, number][][] };
  const enHuella = (e: number, n: number) => [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => huella.some((p) => dentroDe(p, e + dx, n + dy)));
  const draco = new DRACOLoader().setDecoderPath('draco/');
  const loader = new GLTFLoader().setDRACOLoader(draco);
  const SUELO: Record<string, [string, number]> = {
    Terreno: ['ctx/tex_prado.webp', 6], Vias: ['ctx/tex_asfalto.webp', 5], Andenes: ['ctx/tex_anden.webp', 2],
    Separadores: ['ctx/tex_prado.webp', 6], Ciclorrutas: ['ctx/tex_ciclo.webp', 3],
  };
  const tiles = ['T01', 'T02', 'T03', 'T10', 'T11', 'T12', 'T13', 'T20', 'T21', 'T22', 'T23', 'T30', 'T31', 'T32'];
  const archivos = [
    ...Object.keys(SUELO).map((k) => 'suelo_' + k), 'hotel_plazoleta', 'hotel_fachadas', 'hotel_cubiertas', 'torres_vecinas',
    ...tiles.map((t) => 'edificios_' + t),
  ];
  await Promise.all(archivos.map(async (f) => {
    let gltf; try { gltf = await loader.loadAsync(`ctx/${f}.glb`); } catch { return; }
    const recortar = f === 'hotel_fachadas' || f === 'hotel_cubiertas';
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh; if (!mesh.isMesh) return;
      const g = mesh.geometry as THREE.BufferGeometry;
      const pos = g.getAttribute('position');
      // el volumen viejo del hotel se recorta donde ahora está el Revit (misma huella que usa HLF)
      if (recortar && g.index) {
        const idx = g.index.array; const keep: number[] = [];
        for (let t = 0; t < idx.length; t += 3) {
          let x = 0, z = 0; for (let k = 0; k < 3; k++) { x += pos.getX(idx[t + k]); z += pos.getZ(idx[t + k]); }
          if (!enHuella(x / 3, -z / 3)) keep.push(idx[t], idx[t + 1], idx[t + 2]);
        }
        g.setIndex(keep);
      }
      const clave = f.startsWith('suelo_') ? f.slice(6) : '';
      let m = mesh.material as THREE.MeshStandardMaterial;
      if (clave) { // suelo sin UV en el GLB: UV planas en metros + foto PBR
        const uv = new Float32Array(pos.count * 2);
        for (let i = 0; i < pos.count; i++) { uv[i * 2] = pos.getX(i); uv[i * 2 + 1] = pos.getZ(i); }
        g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        const [url, esc] = SUELO[clave];
        m = new THREE.MeshStandardMaterial({ map: tex(url, esc), roughness: 0.95 });
        if (clave === 'Vias' || clave === 'Andenes' || clave === 'Ciclorrutas') { m.polygonOffset = true; m.polygonOffsetFactor = -1; m.polygonOffsetUnits = -2; }
        mesh.material = m;
      } else if (f.startsWith('edificios_')) {
        m = new THREE.MeshStandardMaterial({ color: '#e6e2db', roughness: 0.9, flatShading: true });
        mesh.material = m;
      }
      m.userData.baseOp = m.transparent ? m.opacity : 1;
      ctxMats.push(m);
      mesh.receiveShadow = true; mesh.castShadow = !clave && (f.startsWith('hotel') || f === 'torres_vecinas');
      mesh.raycast = () => {};
    });
    ctxGrupo.add(gltf.scene);
  }));
  hayContexto = true; suelo.visible = false;
}

// ───────────────────────── redes MEP (Piso 2) ─────────────────────────
const cajaMep = new THREE.Box3();
const centroMep = new THREE.Vector3(); // centroide de la tubería bajo +6 m (sin la bajante que sube a la cubierta)
let mepInfo = null as { fuente: string; cats: (Cat & { elementos: number })[] } | null;
async function cargarMep() {
  const p2 = niveles.find((n) => n.info.nombre === 'PISO 2'); if (!p2) return;
  try { mepInfo = await (await fetch('data/mep.json')).json(); } catch { return; }
  const buf = await (await fetch('data/mep.bin')).arrayBuffer();
  for (const c of mepInfo!.cats) {
    const def = CATS[c.nombre]; if (!def) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf, c.vOff, c.vLen), 3));
    g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, c.tOff!, c.tLen!), 1));
    g.computeVertexNormals(); g.computeBoundingBox(); cajaMep.union(g.boundingBox!);
    if (['af', 'acs', 'san', 'rci', 'conduit'].includes(c.nombre)) {
      const p = g.getAttribute('position'); let sx = 0, sz = 0, k = 0;
      for (let i = 0; i < p.count; i++) if (p.getY(i) < 6) { sx += p.getX(i); sz += p.getZ(i); k++; }
      if (k) { centroMep.x += sx; centroMep.z += sz; centroMep.y += k; }
    }
    const m = new THREE.MeshStandardMaterial({ color: def.arq, roughness: def.rough ?? 0.6, metalness: def.metal ?? 0.05, clippingPlanes: [corte], transparent: true, opacity: 0 });
    m.userData = { def };
    const mesh = new THREE.Mesh(g, m);
    mesh.name = c.nombre; mesh.castShadow = false; mesh.receiveShadow = false; mesh.renderOrder = 2;
    mesh.userData = { cat: c.nombre, tris: c.tLen! / 3, elementos: c.elementos, mep: true };
    p2.grupo.add(mesh); p2.mats.set(c.nombre, m);
  }
}

// ───────────────────────── carga ─────────────────────────
async function cargar() {
  const man: Manifest = await (await fetch('data/manifest.json')).json();
  let hechos = 0;
  await Promise.all(man.niveles.map(async (info) => {
    const buf = await (await fetch('data/' + info.archivo)).arrayBuffer();
    const grupo = new THREE.Group(); grupo.name = info.nombre;
    const mats = new Map<string, THREE.MeshStandardMaterial>();
    const lineas = new THREE.LineBasicMaterial({ color: '#4d5966', transparent: true, opacity: 0, depthWrite: false, clippingPlanes: [corte] });
    const caja = new THREE.Box3();
    for (const c of info.cats) {
      const def = CATS[c.nombre]; if (!def) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf, c.vOff, c.vLen), 3));
      if (c.tOff !== undefined) g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, c.tOff, c.tLen!), 1));
      if (c.uvOff !== undefined) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(buf, c.uvOff, c.uvLen!), 2));
      g.computeBoundingBox(); caja.union(g.boundingBox!);
      const pbr = c.nombre === 'muros' ? TEX.ladrillo : c.nombre === 'cubiertas' ? TEX.teja : null;
      const m = new THREE.MeshStandardMaterial({
        color: def.arq, roughness: def.rough ?? (def.vidrio ? 0.08 : 0.88), metalness: def.metal ?? (def.vidrio ? 0.2 : 0),
        flatShading: !pbr, side: THREE.DoubleSide, transparent: !!def.vidrio, opacity: def.vidrio ? 0.5 : 1, clippingPlanes: [corte],
        map: pbr?.map ?? null, normalMap: pbr?.normal ?? null,
      });
      if (pbr) { g.computeVertexNormals(); conMezclaDeMapa(m); }
      m.userData = { ...m.userData, def };
      const mesh = new THREE.Mesh(g, m);
      mesh.castShadow = !def.vidrio; mesh.receiveShadow = true;
      mesh.userData = { nivel: niveles.length, cat: c.nombre, tris: (c.tLen ?? c.vLen / 3) / 3 };
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
  await cargarMep();
  niveles.forEach((n, i) => n.grupo.children.forEach((o) => { if ((o as THREE.Mesh).isMesh) { o.userData.nivel = i; pickables.push(o as THREE.Mesh); } }));
  // separación final de cada nivel en la axonometría explotada
  niveles.forEach((n, i) => { n.destino = i * 9 + (n.info.nombre === "CUBIERTA" ? 8 : 0); });
  if (centroMep.y > 0) centroMep.set(centroMep.x / centroMep.y, 0, centroMep.z / centroMep.y);
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
      if (def.mep) op *= st.mep;
      op *= n.vis;
      m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.6;
      if (def.mep) m.emissive.set(def.arq).multiplyScalar(0.6); else m.emissive.copy(ACENTO).multiplyScalar(0.35 * n.hl);
      m.visible = catsVisibles.has(cat) && (!def.mep || st.mep > 0.01);
      if (m.userData.uMapa) { m.userData.uMapa.value = 1 - st.bim; m.normalScale.setScalar(1 - st.bim); }
    }
    n.lineas.opacity = st.bordes * n.vis;
    n.lineas.color.set('#6a7d99').lerp(new THREE.Color('#0e3064'), st.tinta);
    n.grupo.children.forEach((o) => { if ((o as THREE.LineSegments).isLineSegments) o.visible = st.bordes > 0.01 && catsVisibles.has(o.userData.cat); });
  });
  corte.constant = st.corteY;
  (grilla.material as THREE.Material).opacity = 0.6 * st.grilla;
  (suelo.material as THREE.ShadowMaterial).opacity = 0.16 * (1 - st.orto) * (1 - st.bim * 0.6);
  sol.intensity = THREE.MathUtils.lerp(2.4, 1.2, st.bim);
  ctxGrupo.visible = st.ctx > 0.01;
  for (const m of ctxMats) { const op = m.userData.baseOp * st.ctx; m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.5; }
  scene.fog = hayContexto && st.orto < 0.05 ? niebla : null;
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
  if (st.shift > 0.001) camera.setViewOffset(innerWidth, innerHeight, -innerWidth * st.shift, 0, innerWidth, innerHeight); else camera.clearViewOffset();
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
  const c2 = niveles[nivelP2].caja.getCenter(new THREE.Vector3()); // centro de la planta del Piso 2
  const cm = cajaMep.isEmpty() ? c2 : centroMep; // centro de las redes
  tl = gsap.timeline({ defaults: { ease: 'none' }, paused: true });
  const T = (obj: object, at: number, dur: number) => tl.to(S, { ...obj, duration: dur }, at);

  // 01 · El hotel emerge — avance, desplazamiento lateral, elevación
  T({ dist: 84 }, 0, 2.5);
  T({ az: -38 }, 2.5, 3.5);
  T({ el: 38, dist: 112, ty: 6 }, 6, 4);
  tl.to('.titulo .w', { yPercent: -70, opacity: 0, stagger: 0.5, duration: 3 }, 3);
  tl.to('.hero-der', { y: -60, opacity: 0, duration: 2.5 }, 2.5);
  tl.to('#velo', { opacity: 0, duration: 4 }, 4);
  const total = new THREE.Box3(); niveles.forEach((n) => total.union(n.caja));
  const cnt = { niveles: 0, altura: 0, cats: 0 };
  const nCats = new Set(niveles.flatMap((n) => [...n.mats.keys()])).size;
  const pintarCnt = () => {
    document.querySelector('[data-cnt="niveles"]')!.textContent = String(Math.round(cnt.niveles));
    document.querySelector('[data-cnt="altura"]')!.textContent = cnt.altura.toFixed(1).replace('.', ',');
    document.querySelector('[data-cnt="cats"]')!.textContent = String(Math.round(cnt.cats));
  };
  tl.to(cnt, { niveles: niveles.length, altura: total.max.y, cats: nCats, duration: 3, ease: 'power2.out', onUpdate: pintarCnt }, 10.6);

  // 02 · Vista aérea oblicua + órbita parcial; etiquetas ancladas
  T({ el: 58, dist: 150, az: -10, ty: 4 }, 10, 4);
  T({ az: 52 }, 14, 6);
  T({ grilla: 0, shift: 0.14 }, 10, 3);

  // 03 · Explosión arquitectónica (axonometría)
  T({ az: 45, el: 30, dist: 165, ty: 22 }, 20, 3);
  T({ explode: 1, dist: 190, ty: 30 }, 22, 8);

  // 04 · Entrar al edificio (Piso 2)
  T({ explode: 0 }, 30, 3);
  T({ verHasta: nivelP2, ty: elevP2, tx: c2.x, tz: c2.z }, 31.5, 3);
  T({ corteY: cut }, 32.5, 2.5);
  T({ az: 28, el: 42, dist: 72 }, 32, 4);
  T({ az: -18, el: 36, dist: 50 }, 36, 4);

  // 05 · Arquitectura → BIM
  T({ verHasta: 9, corteY: 999, ty: 9, tx: 0, tz: 0 }, 40, 2);
  T({ az: 45, el: 28, dist: 130 }, 40, 3);
  T({ bim: 1, bordes: 0.55, ctx: 0.3 }, 41.5, 2.5);
  T({ cerr: 1 }, 43.5, 1.5);
  // las redes del Piso 2 quedan expuestas: se retiran los pisos de arriba y se corta sobre el cielo raso
  T({ verHasta: nivelP2, corteY: elevP2 + 2.75, mep: 1, cerr: 0.92, bordes: 0.22, az: 12, el: 52, dist: 40, ty: elevP2 + 2, tx: cm.x, tz: cm.z, ctx: 0, shift: 0.18 }, 44.5, 3);

  // 06 · Del edificio al plano
  T({ verHasta: nivelP2, corteY: cut, cerr: 0, ty: elevP2, mep: 0 }, 50, 2);
  T({ az: 0, el: 89.5, dist: 105, tx: c2.x, tz: c2.z }, 50, 5);
  T({ bordes: 1, tinta: 1, grilla: 0, ctx: 0 }, 52, 4);
  T({ orto: 1 }, 53, 5);

  // 07 · Remodelación — vuelve a la representación realista
  T({ orto: 0, bim: 0, bordes: 0, tinta: 0, verHasta: 9, corteY: 999, ctx: 1, tx: 0, tz: 0 }, 60, 3);
  T({ az: 70, el: 20, dist: 120, ty: 9 }, 60, 4);
  T({ az: 105 }, 64, 6);

  // 08 · Ruta BACO
  T({ shift: 0.24 }, 70, 2);
  T({ az: 20, el: 30, dist: 150, ty: 9 }, 70, 10);

  // 09 · Inversión: el edificio gira despacio detrás del simulador
  T({ az: -40, el: 42, dist: 190, ty: 10 }, 80, 10);

  // textos por escena
  const N = 9;
  for (let e = 1; e <= N; e++) {
    const el = `.escena[data-e="${e}"]`, a = (e - 1) * ESC;
    if (e === 1) gsap.set(el, { autoAlpha: 1 });
    else tl.fromTo(el, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1 }, a + 0.3);
    if (e < N) tl.to(el, { autoAlpha: 0, y: -40, duration: 1 }, a + ESC - 1.2);
  }
  tl.set({}, {}, N * ESC);

  // marcas de progreso
  const nombres = ['Inicio', 'Edificio', 'Niveles', 'Interior', 'BIM', 'Plano', 'Remodelación', 'Ruta', 'Inversión'];
  $('#marcas').innerHTML = nombres.map((n, i) => `<li style="top:${(i / N) * 100}%">${String(i + 1).padStart(2, '0')} ${n}</li>`).join('');

  st = ScrollTrigger.create({
    trigger: '#escenario', start: 'top top', end: () => '+=' + innerHeight * 17,
    pin: true, anticipatePin: 1, scrub: true, invalidateOnRefresh: true, animation: tl,
    onUpdate: (self) => {
      ($('#progreso i')).style.height = (self.progress * 100) + '%';
      const e = Math.min(N, Math.floor(self.progress * N) + 1);
      if (e !== escenaActual) document.querySelectorAll('#marcas li').forEach((li, i) => li.classList.toggle('on', i === e - 1));
      escenaActual = e;
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
  camera.clearViewOffset(); S.shift = 0;
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
  if (v === 'arq') gsap.to(S, { bim: 0, cerr: 0, bordes: 0, tinta: 0, ctx: 1, mep: 0, duration: 1 });
  if (v === 'bim') gsap.to(S, { bim: 1, cerr: 1, bordes: 0.55, tinta: 0, ctx: 0.3, mep: 1, duration: 1 });
  if (v === 'explotar') {
    const abrir = S.explode < 0.5;
    gsap.to(S, { explode: abrir ? 1 : 0, verHasta: 9, corteY: 999, duration: 2, ease: 'power1.inOut' });
    volar(new THREE.Vector3(95, abrir ? 85 : 60, 105), new THREE.Vector3(0, abrir ? 28 : 9, 0), 2);
  }
  if (v === 'plano') {
    const i = nivelSel >= 0 ? nivelSel : niveles.findIndex((n) => n.info.nombre === 'PISO 2');
    const elev = niveles[i].info.elev; nivelSel = i;
    gsap.to(S, { explode: 0, bim: 1, cerr: 0, bordes: 1, tinta: 1, verHasta: i, corteY: elev + 1.6, sel: -1, dimOtros: 0, orto: 1, ctx: 0, duration: 1.6 });
    // FOV 5° (casi ortográfica): distancia para encuadrar ~90 m de planta
    const d = 45 / Math.tan(THREE.MathUtils.degToRad(2.5));
    volar(new THREE.Vector3(0, elev + d, 0.01), new THREE.Vector3(0, elev, 0), 1.6);
    pintarPanel();
  }
}

function pintarPanel() {
  $('#listaNiveles').innerHTML = `<li data-n="-1" class="${nivelSel < 0 ? 'sel' : ''}">Edificio completo</li>` +
    niveles.map((n, i) => `<li data-n="${i}" class="${nivelSel === i ? 'sel' : ''}">${n.info.nombre}<small>+${n.info.elev.toFixed(2)} m</small></li>`).join('');
  $('#listaDisc').innerHTML = DISCS.filter((d) => Object.entries(CATS).some(([c, v]) => v.disc === d && niveles.some((n) => n.mats.has(c)))).map((d) => {
    const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
    return `<li data-d="${d}" class="${on ? '' : 'off'}">${d}<small>${on ? 'visible' : 'oculta'}</small></li>`;
  }).join('');
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
    <dt>Fuente</dt><dd>${CATS[cat].mep ? '1001_Hotel_la_fotona_redes.rvt · ' + h.object.userData.elementos + ' elementos' : 'HLF_P2-P6.rvt'}</dd></dl>`;
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
    if (!on && Object.entries(CATS).some(([c, v]) => v.disc === li.dataset.d && v.mep)) gsap.to(S, { mep: 1, cerr: Math.max(S.cerr, 0.8), duration: 1 });
    pintarPanel();
  });
  $('#listaCats').addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest('li'); if (!li?.dataset.c) return;
    const c = li.dataset.c; catsVisibles.has(c) ? catsVisibles.delete(c) : catsVisibles.add(c); pintarPanel();
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && modo === 'libre') salirLibre(); });
  landing();
  $('#notaRemodel').textContent = 'La comparación con clipping necesita dos modelos: el de condiciones existentes (LOD 300, a cargo del proveedor de escaneo según la propuesta) y el de remodelación. Por ahora solo está cargado el modelo de remodelación HLF_P2-P6.';
}

// ───────────────────────── landing: interacciones dentro del recorrido ─────────────────────────
/** Entregables y honorarios por etapa: Propuesta comercial BACO Studio v03 (9 nov 2026). */
const DET: Record<string, string> = {
  '00': '<b>Proveedor de escaneo</b> (contratado por el propietario): levantamiento 3D y modelo de condiciones existentes LOD 300. BACO revisa coordenadas, consistencia y zonas no verificadas.',
  A: '<b>$33 M</b> · BEP marco y operativo, EIR/AIR, protocolo CDE, matriz LOD 400, anexos y evaluación BIM de proponentes.',
  B: '<b>$47 M</b> · Modelo federado por hito, reportes de interferencias, minutas y registro de incidencias.',
  C: '<b>$184 M</b> independiente · <b>$110,4 M</b> con equipo de construcción BACO · Informes BIM mensuales, control de versiones, registro de RFI y cambios.',
  D: '<b>$31 M</b> · Federado as-built, planos récord por especialidad, inventario de equipos y paquete de activos digitales.',
};
function irAEscena(e: number) {
  const N = 9; const y = st.start + (st.end - st.start) * ((e - 1 + 0.55) / N);
  window.scrollTo({ top: y, behavior: 'smooth' });
}
function landing() {
  addEventListener('pointermove', (ev) => { if (modo === 'cine') { U.tpx = ev.clientX / innerWidth - 0.5; U.tpy = ev.clientY / innerHeight - 0.5; } });
  document.querySelectorAll<HTMLElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => irAEscena(+b.dataset.ir!)));
  $('#marcas').addEventListener('click', (e) => { const li = (e.target as HTMLElement).closest('li'); if (li) irAEscena([...li.parentElement!.children].indexOf(li) + 1); });
  // 03 · niveles
  $('#chipsNiveles').innerHTML = niveles.map((n, i) => `<button class="chip" data-n="${i}">${n.info.nombre}</button>`).join('');
  $('#chipsNiveles').addEventListener('mouseover', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) S.sel = +b.dataset.n!; });
  $('#chipsNiveles').addEventListener('mouseleave', () => { S.sel = -1; });
  $('#chipsNiveles').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) entrarLibre(+b.dataset.n!); });
  // 04 · altura de corte
  const rc = $<HTMLInputElement>('#rCorte');
  rc.addEventListener('input', () => { const v = +rc.value; U.corteExtra = v - 1.6; $('#vCorte').textContent = v.toFixed(2).replace('.', ',') + ' m'; });
  // 05 · disciplinas
  const pintarDisc = () => {
    $('#chipsDisc').innerHTML = DISCS.filter((d) => Object.entries(CATS).some(([c, v]) => v.disc === d && niveles.some((n) => n.mats.has(c)))).map((d) => {
      const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
      const color = Object.values(CATS).find((v) => v.disc === d && v.mep)?.arq;
      return `<button class="chip ${on ? 'on' : ''}" data-d="${d}">${color ? `<i style="background:${color}"></i>` : ''}${d}</button>`;
    }).join('');
  };
  pintarDisc();
  $('#chipsDisc').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (!b?.dataset.d) return;
    const cats = Object.entries(CATS).filter(([, v]) => v.disc === b.dataset.d).map(([c]) => c);
    const on = cats.some((c) => catsVisibles.has(c));
    cats.forEach((c) => on ? catsVisibles.delete(c) : catsVisibles.add(c));
    pintarDisc();
  });
  // 06 · planta por nivel
  const conPlanta = niveles.map((n, i) => ({ n, i })).filter(({ n }) => n.mats.has('muros') && n.info.nombre !== 'PISO 1');
  const p2 = niveles.findIndex((n) => n.info.nombre === 'PISO 2');
  const pintarPlano = () => { $('#chipsPlano').innerHTML = conPlanta.map(({ n, i }) => `<button class="chip ${(U.planoNivel < 0 ? p2 : U.planoNivel) === i ? 'on' : ''}" data-n="${i}">${n.info.nombre}</button>`).join(''); };
  pintarPlano();
  $('#chipsPlano').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (!b) return; U.planoNivel = +b.dataset.n!; pintarPlano(); });
  // 08 · etapas
  const pintarEtapa = (k: string) => {
    document.querySelectorAll('.etapa').forEach((el) => el.classList.toggle('on', (el as HTMLElement).dataset.k === k));
    const det = $('#etapaDet'); det.innerHTML = DET[k];
    gsap.fromTo(det, { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' });
  };
  $('#etapas').innerHTML = ETAPAS.map(([k, t, d]) => `<button class="etapa" data-k="${k}"><b>${k}</b><strong>${t}</strong><span>${d}</span></button>`).join('');
  $('#etapas').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.etapa'); if (b) pintarEtapa(b.dataset.k!); });
  pintarEtapa('A');
  // 09 · simulador (fórmula de la propuesta)
  let integrada = false;
  const M = (v: number) => '$' + v.toLocaleString('es-CO', { maximumFractionDigits: 1 }) + ' M';
  const vis = { total: 0, iva: 0, eq: 0 };
  const calc = () => {
    const meses = +$<HTMLInputElement>('#rMeses').value, obra = +$<HTMLInputElement>('#rObra').value;
    $('#vMeses').textContent = meses + ' meses'; $('#vObra').textContent = '$' + obra.toLocaleString('es-CO') + ' M';
    const total = 111 + meses * (integrada ? 13.8 : 23);
    gsap.to(vis, { total, iva: total * 1.19, eq: (100 * total) / obra, duration: 0.6, ease: 'power2.out', onUpdate: () => {
      $('#oTotal').textContent = M(Math.round(vis.total * 10) / 10);
      $('#oIva').textContent = M(Math.round(vis.iva * 10) / 10);
      $('#oEq').textContent = vis.eq.toFixed(2).replace('.', ',') + ' %';
    } });
  };
  $('#rMeses').addEventListener('input', calc); $('#rObra').addEventListener('input', calc);
  $('#segModo').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b) return;
    integrada = b.dataset.m === 'int';
    document.querySelectorAll('#segModo button').forEach((x) => x.classList.toggle('on', x === b)); calc();
  });
  calc();
}

// ───────────────────────── bucle ─────────────────────────
function resize() {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
addEventListener('resize', resize);
function frame() {
  const E = { ...S };
  if (modo === 'cine') {
    if (E.corteY < 500) E.corteY += U.corteExtra;
    if (escenaActual === 6 && U.planoNivel >= 0) { const n = niveles[U.planoNivel]; E.verHasta = U.planoNivel; E.corteY = n.info.elev + 1.6; E.ty = n.info.elev; }
    U.px += (U.tpx - U.px) * 0.05; U.py += (U.tpy - U.py) * 0.05;
    E.az += U.px * 7 * (1 - E.orto); E.el = THREE.MathUtils.clamp(E.el - U.py * 3 * (1 - E.orto), 2, 89.6);
  }
  // pasado el recorrido, las secciones comerciales tapan el lienzo: no se dibuja
  const pasado = modo === 'cine' && !!st && scrollY > st.end + 20;
  document.body.classList.toggle('pasado', pasado);
  if (pasado) { requestAnimationFrame(frame); return; }
  aplicar(E);
  if (modo === 'cine') camaraDesde(E);
  else { controls.update(); camera.fov = THREE.MathUtils.lerp(35, 5, S.orto); camera.near = 0.5 + 20 * S.orto; camera.far = 4000; camera.updateProjectionMatrix(); }
  actualizarEtiquetas();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

(async () => {
  const man = await cargar();
  cargarContexto(man.enu).catch((e) => console.warn('contexto', e));
  ui();
  // etiquetas: edificio (escena 02) y niveles (escena 03 / exploración)
  const total = new THREE.Box3(); niveles.forEach((n) => total.union(n.caja));
  etiqueta('Torre Suites · ver en 3D', () => new THREE.Vector3(0, total.max.y + 2, 0),
    () => modo === 'cine' && escenaActual === 2 ? 1 : 0, () => entrarLibre());
  niveles.forEach((n, i) => etiqueta(n.info.nombre, () => new THREE.Vector3(n.caja.max.x, n.info.elev + n.grupo.position.y + 1.5, n.caja.getCenter(pv).z),
    () => (modo === 'cine' && escenaActual === 3 ? ss(0.6, 0.9, S.explode) : 0) || (modo === 'libre' && S.explode > 0.6 ? n.vis : 0),
    () => entrarLibre(i)));
  construirRecorrido();
  iniciarComercial({
    redes: (mepInfo?.cats ?? []).filter((c) => CATS[c.nombre]).map((c) => ({ nombre: CATS[c.nombre].nombre, disc: CATS[c.nombre].disc, color: CATS[c.nombre].arq === '#0e3064' ? '#7fa6e0' : CATS[c.nombre].arq, elementos: c.elementos, tris: c.tLen! / 3 })),
    niveles: niveles.map((n) => ({ nombre: n.info.nombre, cats: n.info.cats.filter((c) => CATS[c.nombre]).map((c) => ({ nombre: CATS[c.nombre].nombre, tris: (c.tLen ?? c.vLen / 3) / 3, color: c.nombre === 'cubiertas' ? '#a5563b' : CATS[c.nombre].arq })) })),
  });
  document.querySelector('[data-arriba]')?.addEventListener('click', () => irAEscena(1));
  document.querySelector('[data-explorar]')?.addEventListener('click', () => entrarLibre());
  pintarPanel();
  $('#cargando').classList.add('fin');
  gsap.from('.titulo .w', { yPercent: 110, opacity: 0, stagger: 0.14, duration: 1.4, ease: 'power3.out', delay: 0.3 });
  gsap.from('.hero-der', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 });
  frame();
})();
