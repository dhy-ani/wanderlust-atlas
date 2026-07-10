// Google-Maps-style map markers: a small red teardrop with a white dot inside,
// tip glued to the exact coordinate on the globe surface.
import * as THREE from 'three';

// Teardrop profile revolved around Y: tip at y=0, rounded bulb on top.
// Deliberately small (max radius ~0.055) to read like a real map pin.
const PIN_PROFILE = [
  [0.0, 0.0], [0.014, 0.014], [0.033, 0.04], [0.05, 0.076],
  [0.057, 0.115], [0.055, 0.154], [0.042, 0.19], [0.022, 0.215], [0.0, 0.225],
].map(([x, y]) => new THREE.Vector2(x, y));

const RED = 0xea4335;
const RED_HOT = 0xff6f52;

export function makePinFactory(radius) {
  const pinGeo = new THREE.LatheGeometry(PIN_PROFILE, 24);
  const dotGeo = new THREE.SphereGeometry(0.024, 16, 16);
  const ringGeo = new THREE.CircleGeometry(0.03, 20);

  function latLngToVec3(lat, lng, r = radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta),
    );
  }

  // color: 0xea4335 default; pass custom for search / custom pins (e.g. amber).
  function create(lat, lng, color = RED) {
    const pos = latLngToVec3(lat, lng);
    const normal = pos.clone().normalize();

    const mat = new THREE.MeshPhongMaterial({ color, shininess: 60, specular: 0x442222 });
    const mesh = new THREE.Mesh(pinGeo, mat);
    mesh.position.copy(pos);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);

    const dot = new THREE.Mesh(dotGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    dot.position.set(0, 0.13, 0);
    mesh.add(dot);

    const ring = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, side: THREE.DoubleSide }),
    );
    ring.position.copy(normal.clone().multiplyScalar(radius + 0.002));
    ring.lookAt(0, 0, 0);

    mesh.userData = { dot, ring, baseColor: color, hotColor: color === RED ? RED_HOT : color };
    return { mesh, ring };
  }

  return { create, latLngToVec3, RED };
}
