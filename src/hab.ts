import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

/** Habitación 216 (modelo de 3ds Max exportado a GLB) en una maqueta sin cielo que gira. */
export function iniciarHabitacion() {
  const canvas = document.getElementById('hab') as HTMLCanvasElement;
  let iniciado = false, visible = false;
  ScrollTrigger.create({
    trigger: '[data-escena="interior"]', start: 'top bottom+=800', end: 'bottom top',
    onToggle: (s) => { visible = s.isActive; if (s.isActive && !iniciado) { iniciado = true; arrancar(); } },
  });

  function arrancar() {
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    r.setPixelRatio(Math.min(2, devicePixelRatio));
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.78;
    r.setClearColor(0x000000, 0);
    const sc = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    sc.add(new THREE.HemisphereLight('#fff6e8', '#3a4656', 0.7));
    const sol = new THREE.DirectionalLight('#ffe7c4', 1.1); sol.position.set(4, 10, 6); sc.add(sol);
    const cam = new THREE.PerspectiveCamera(32, 1, 0.05, 200);
    const plano = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
    r.clippingPlanes = [plano];
    const centro = new THREE.Vector3(); let radio = 6;
    const O = { az: 35, el: 52, auto: 0, cut: 1 };
    const resize = () => { const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
    addEventListener('resize', resize); resize();

    const loader = new GLTFLoader().setDRACOLoader(new DRACOLoader().setDecoderPath('draco/'));
    loader.load('img/hab216.glb', (g) => {
      const m = g.scene;
      const caja = new THREE.Box3().setFromObject(m);
      const tam = caja.getSize(new THREE.Vector3());
      // si viene en mm o cm, se normaliza a metros
      const esc = tam.y > 100 ? 0.001 : tam.y > 10 ? 0.01 : 1;
      m.scale.setScalar(esc);
      caja.setFromObject(m); caja.getCenter(centro); caja.getSize(tam);
      m.position.sub(centro); centro.set(0, 0, 0);
      const piso = -tam.y / 2;
      radio = Math.max(tam.x, tam.z) * 0.95;
      plano.constant = piso + Math.min(tam.y * 0.82, 2.35); // corta el cielo a ~2,35 m
      m.traverse((o) => { const me = o as THREE.Mesh; if (me.isMesh) { me.frustumCulled = true; } });
      sc.add(m);
      document.getElementById('habCarga')!.classList.add('fin');
      gsap.fromTo(O, { el: 85, cut: 0 }, { el: 48, cut: 1, duration: 2.4, ease: 'power3.out' });
      gsap.fromTo(m.scale, { x: esc * 0.85, y: esc * 0.85, z: esc * 0.85 }, { x: esc, y: esc, z: esc, duration: 2, ease: 'power3.out' });
    }, undefined, () => { document.getElementById('habCarga')!.textContent = 'No se pudo cargar la habitación'; });

    // arrastrar para girar
    let drag = false, lx = 0, ly = 0;
    canvas.addEventListener('pointerdown', (e) => { drag = true; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointerup', () => { drag = false; });
    canvas.addEventListener('pointermove', (e) => {
      if (!drag) return;
      O.az -= (e.clientX - lx) * 0.35; O.el = THREE.MathUtils.clamp(O.el + (e.clientY - ly) * 0.25, 15, 88);
      lx = e.clientX; ly = e.clientY;
    });

    const tick = () => {
      requestAnimationFrame(tick);
      if (!visible) return;
      if (!drag) O.az += 0.12;
      resize();
      const az = THREE.MathUtils.degToRad(O.az), el = THREE.MathUtils.degToRad(O.el);
      const d = radio * 1.45 / Math.max(0.75, Math.min(1.2, cam.aspect));
      cam.position.set(centro.x + d * Math.cos(el) * Math.sin(az), centro.y + d * Math.sin(el), centro.z + d * Math.cos(el) * Math.cos(az));
      cam.lookAt(centro.x, centro.y - 0.3, centro.z);
      r.render(sc, cam);
    };
    tick();
  }
}
