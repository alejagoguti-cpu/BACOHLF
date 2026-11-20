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
import './premisa.css';

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
  // ── premisa "construir antes de construir" ──
  nube: 0,       // 1 = la torre es una nube de puntos de escaneo (LOD 300)
  noche: 0,      // 1 = fondo azul Estelar (apertura)
  obra: 1,       // avance de la construcción: los niveles pasan de modelo técnico a obra, de abajo hacia arriba
  dibujo: 1,     // fracción dibujada de las redes MEP (se trazan tubo a tubo)
  alerta: 0,     // punto crítico real detectado en el modelo de redes
  mes: 0,        // reloj del proyecto (0–12)
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
  crearNubes();
  buscarPuntoCritico();
  niveles.forEach((n, i) => n.grupo.children.forEach((o) => { if ((o as THREE.Mesh).isMesh) { o.userData.nivel = i; pickables.push(o as THREE.Mesh); } }));
  // separación final de cada nivel en la axonometría explotada
  niveles.forEach((n, i) => { n.destino = i * 9 + (n.info.nombre === "CUBIERTA" ? 8 : 0); });
  if (centroMep.y > 0) centroMep.set(centroMep.x / centroMep.y, 0, centroMep.z / centroMep.y);
  return man;
}

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
  T({ bordes: 0.5, az: -32, el: 30, dist: 128 }, 11, 14, 'power1.inOut');

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
  T({ cerr: 0.6, mep: 1, az: 55, el: 34, dist: 96, ty: 7, tx: c2.x, tz: c2.z, ctx: 0.25 }, 105, 10, 'power2.inOut');
  T({ cerr: 0, mep: 0, az: 15, el: 22, dist: 125, ty: 9, tx: 0, tz: 0, ctx: 1 }, 120, 10, 'power2.inOut');

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
    pin: true, anticipatePin: 1, scrub: true, invalidateOnRefresh: true, animation: tl,
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
  const fase = m < 0.02 ? 0 : m <= 1 ? 1 : m <= 3 ? 2 : m < 11 ? 3 : 4; // etapa según el reloj del proyecto
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
  gsap.to(S, { orto: 0, nube: 0, noche: 0, obra: 1, dibujo: 1, alerta: 0, shift: 0, duration: 0.8 });
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
    if (escenaActual === 4) entrarLibre(i); else if (escenaActual > 1) entrarLibre();
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
  const activo = modo === 'libre' || escenaActual > 1;
  const h = activo ? pick(ev) : undefined;
  canvas.style.cursor = h ? 'pointer' : '';
  if (modo === 'cine' && escenaActual === 4) S.sel = h ? h.object.userData.nivel : -1;
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
}

// ───────────────────────── landing: interacciones dentro del recorrido ─────────────────────────
function irAFase(f: number) {
  const t = (FASES[f - 1]?.t0 ?? 0) + (f === 3 ? 20 : 6);
  window.scrollTo({ top: st.start + (st.end - st.start) * (t / T_FIN), behavior: 'smooth' });
}
function landing() {
  addEventListener('pointermove', (ev) => { if (modo === 'cine') { U.tpx = ev.clientX / innerWidth - 0.5; U.tpy = ev.clientY / innerHeight - 0.5; } });
  document.querySelectorAll<HTMLElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => irAFase(+b.dataset.ir!)));
  $('#marcas').addEventListener('click', (e) => { const li = (e.target as HTMLElement).closest('li'); if (li) irAFase([...li.parentElement!.children].indexOf(li) + 1); });
  $('#hModo').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b) return;
    hudIntegrada = b.dataset.m === 'int';
    document.querySelectorAll('#hModo button').forEach((x) => x.classList.toggle('on', x === b));
  });
  // B · disciplinas de las redes
  const pintarDisc = () => {
    $('#chipsDisc').innerHTML = DISCS.filter((d) => Object.entries(CATS).some(([c, v]) => v.disc === d && v.mep && niveles.some((n) => n.mats.has(c)))).map((d) => {
      const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
      const color = Object.values(CATS).find((v) => v.disc === d && v.mep)?.arq;
      return `<button class="chip ${on ? 'on' : ''}" data-d="${d}"><i style="background:${color}"></i>${d}</button>`;
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
  if (critico.ok) $('#txtCritico').innerHTML = `Separación mínima medida en el modelo entre la red contra incendios y el conduit eléctrico: <b>${(critico.d * 100).toFixed(1).replace('.', ',')} cm</b>. Un punto así se lleva a la mesa técnica antes de instalar.`;
  // C · pisos
  $('#chipsNiveles').innerHTML = niveles.map((n, i) => `<button class="chip" data-n="${i}">${n.info.nombre}</button>`).join('');
  $('#chipsNiveles').addEventListener('mouseover', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) S.sel = +b.dataset.n!; });
  $('#chipsNiveles').addEventListener('mouseleave', () => { S.sel = -1; });
  $('#chipsNiveles').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) entrarLibre(+b.dataset.n!); });
  // simulador (sección de inversión)
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
    U.px += (U.tpx - U.px) * 0.05; U.py += (U.tpy - U.py) * 0.05;
    E.az += U.px * 7 * (1 - E.orto); E.el = THREE.MathUtils.clamp(E.el - U.py * 3 * (1 - E.orto), 2, 89.6);
  }
  // pasado el recorrido, las secciones comerciales tapan el lienzo: no se dibuja
  const pasado = modo === 'cine' && !!st && scrollY > st.end + 20;
  document.body.classList.toggle('pasado', pasado);
  if (pasado) { requestAnimationFrame(frame); return; }
  aplicar(E);
  if (modo === 'cine') pintarHud();
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
  // etiqueta anclada al punto crítico real del modelo de redes
  const wp = new THREE.Vector3();
  etiqueta('Punto crítico · RCI ↔ conduit', () => (marcaCritico ? marcaCritico.getWorldPosition(wp).add(new THREE.Vector3(0, 0.9, 0)) : wp),
    () => (modo === 'cine' && marcaCritico ? S.alerta : 0), () => entrarLibre(niveles.findIndex((n) => n.info.nombre === 'PISO 2')));
  construirRecorrido();
  iniciarComercial({
    redes: (mepInfo?.cats ?? []).filter((c) => CATS[c.nombre]).map((c) => ({ nombre: CATS[c.nombre].nombre, disc: CATS[c.nombre].disc, color: CATS[c.nombre].arq === '#0e3064' ? '#7fa6e0' : CATS[c.nombre].arq, elementos: c.elementos, tris: c.tLen! / 3 })),
    niveles: niveles.map((n) => ({ nombre: n.info.nombre, cats: n.info.cats.filter((c) => CATS[c.nombre]).map((c) => ({ nombre: CATS[c.nombre].nombre, tris: (c.tLen ?? c.vLen / 3) / 3, color: c.nombre === 'cubiertas' ? '#a5563b' : CATS[c.nombre].arq })) })),
  });
  document.querySelector('[data-arriba]')?.addEventListener('click', () => irAFase(1));
  document.querySelector('[data-explorar]')?.addEventListener('click', () => entrarLibre());
  document.querySelector('[data-explorar-hud]')?.addEventListener('click', () => entrarLibre());
  pintarPanel();
  $('#cargando').classList.add('fin');
  gsap.from('.titulo .w', { yPercent: 110, opacity: 0, stagger: 0.14, duration: 1.4, ease: 'power3.out', delay: 0.3 });
  gsap.from('.hero-der', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 });
  frame();
})();
