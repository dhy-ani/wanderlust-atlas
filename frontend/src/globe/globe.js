// The 3D satellite globe: real Earth texture, Google-style pins, dashed routes,
// drag-to-rotate, auto-spin, and click-to-select. Exposes a small API the rest
// of the app drives (see the returned object at the bottom).
import * as THREE from 'three';
import { EARTH_TEXTURE_URL, EARTH_BUMP_URL } from '../config.js';
import { makePinFactory } from './pins.js';
import { makeRouteFactory } from './routes.js';

const RADIUS = 2.6;

export function initGlobe(canvas, { onSelect } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 7.2);

  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  // --- Earth: real satellite texture, with a graceful solid-color fallback ---
  const geo = new THREE.SphereGeometry(RADIUS, 96, 96);
  const mat = new THREE.MeshPhongMaterial({ color: 0x2a4a6a, shininess: 8 });
  const earth = new THREE.Mesh(geo, mat);
  globeGroup.add(earth);

  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');
  loader.load(EARTH_TEXTURE_URL, (tex) => { mat.map = tex; mat.color.set(0xffffff); mat.needsUpdate = true; });
  loader.load(EARTH_BUMP_URL, (tex) => { mat.bumpMap = tex; mat.bumpScale = 0.04; mat.needsUpdate = true; });

  // atmosphere glow
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(RADIUS * 1.03, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x8ecbff, transparent: true, opacity: 0.1, side: THREE.BackSide }),
  );
  globeGroup.add(glow);

  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const dir = new THREE.DirectionalLight(0xffffff, 0.6);
  dir.position.set(5, 3, 6);
  scene.add(dir);

  // starfield
  {
    const g = new THREE.BufferGeometry();
    const n = 900;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 40 + Math.random() * 60;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      pos[i * 3 + 2] = r * Math.cos(ph);
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xf2e8d3, size: 0.09, transparent: true, opacity: 0.55 })));
  }

  const pins = makePinFactory(RADIUS);
  const routes = makeRouteFactory(RADIUS);

  const pinMeshes = [];       // { mesh, id, ring }
  let selectedId = null;
  let routeGroup = null;

  // --- add the fixed destination pins ---
  function addDestinations(list) {
    list.forEach((d) => {
      const { mesh, ring } = pins.create(d.lat, d.lng);
      mesh.userData.id = d.id;
      globeGroup.add(mesh);
      globeGroup.add(ring);
      pinMeshes.push({ mesh, id: d.id, ring });
    });
  }

  // --- add a transient custom/search pin (amber) ---
  function addCustomPin(lat, lng, id) {
    const { mesh, ring } = pins.create(lat, lng, 0xffb300);
    mesh.userData.id = id;
    globeGroup.add(mesh);
    globeGroup.add(ring);
    const entry = { mesh, id, ring, custom: true };
    pinMeshes.push(entry);
    return entry;
  }

  function removePin(id) {
    const idx = pinMeshes.findIndex((p) => p.id === id);
    if (idx === -1) return;
    const { mesh, ring } = pinMeshes[idx];
    globeGroup.remove(mesh, ring);
    pinMeshes.splice(idx, 1);
  }

  // --- draw / clear a dashed route through ordered stops [{lat,lng}] ---
  function setRoute(stops) {
    if (routeGroup) { globeGroup.remove(routeGroup); routeGroup = null; }
    if (!stops || stops.length < 2) return;
    const vecs = stops.map((s) => pins.latLngToVec3(s.lat, s.lng));
    routeGroup = routes.createRoute(vecs);
    globeGroup.add(routeGroup);
  }

  // --- rotate the globe so a coordinate faces the camera ---
  function focusOn(lat, lng) {
    autoSpin = false;
    targetRot = {
      y: -(lng + 180) * (Math.PI / 180) - Math.PI / 2,
      x: THREE.MathUtils.clamp(lat * (Math.PI / 180), -1.1, 1.1),
    };
    setTimeout(() => (autoSpin = true), 6000);
  }

  function select(id) {
    selectedId = id;
    const d = pinMeshes.find((p) => p.id === id);
    if (d) focusOn(...coordOf(id));
  }
  function coordOf() { return [0, 0]; } // patched below once destinations known

  // ---- interaction ----
  let isDragging = false, dragged = false, autoSpin = true;
  let prev = { x: 0, y: 0 };
  let targetRot = null;

  canvas.addEventListener('pointerdown', (e) => { isDragging = true; autoSpin = false; dragged = false; targetRot = null; prev = { x: e.clientX, y: e.clientY }; });
  addEventListener('pointerup', () => { isDragging = false; setTimeout(() => (autoSpin = true), 3000); });
  addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragged = true;
    globeGroup.rotation.y += dx * 0.005;
    globeGroup.rotation.x = THREE.MathUtils.clamp(globeGroup.rotation.x + dy * 0.005, -1.1, 1.1);
    prev = { x: e.clientX, y: e.clientY };
  });

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  canvas.addEventListener('click', (e) => {
    if (dragged) return;
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(pinMeshes.map((p) => p.mesh));
    if (hits.length && onSelect) onSelect(hits[0].object.userData.id);
  });

  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);
  resize();

  function animate() {
    requestAnimationFrame(animate);
    if (targetRot) {
      globeGroup.rotation.y += (targetRot.y - globeGroup.rotation.y) * 0.08;
      globeGroup.rotation.x += (targetRot.x - globeGroup.rotation.x) * 0.08;
    } else if (autoSpin && !isDragging) {
      globeGroup.rotation.y += 0.0015;
    }
    const t = performance.now() * 0.002;
    pinMeshes.forEach(({ mesh, id, ring }) => {
      const active = selectedId === id;
      const s = active ? 1.4 + Math.sin(t * 2) * 0.08 : 1;
      mesh.scale.setScalar(s);
      ring.scale.setScalar(active ? 1 + Math.sin(t * 2) * 0.25 : 1);
      mesh.material.color.set(active ? mesh.userData.hotColor : mesh.userData.baseColor);
    });
    renderer.render(scene, camera);
  }
  animate();

  return {
    addDestinations(list) {
      addDestinations(list);
      // patch coordOf now that we know coordinates
      coordOf = (id) => { const d = list.find((x) => x.id === id); return d ? [d.lat, d.lng] : [0, 0]; };
    },
    addCustomPin, removePin, setRoute, focusOn, select,
    setSelected(id) { selectedId = id; },
  };
}
