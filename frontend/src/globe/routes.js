// Dashed great-circle route lines drawn just above the globe surface.
import * as THREE from 'three';

// Spherical interpolation between two surface points, lifted slightly off the
// globe so the dashed line sits above the map rather than z-fighting it.
function greatCirclePoints(a, b, radius, segments = 96, lift = 1.02) {
  const va = a.clone().normalize();
  const vb = b.clone().normalize();
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // slerp
    const dot = THREE.MathUtils.clamp(va.dot(vb), -1, 1);
    const omega = Math.acos(dot);
    let p;
    if (omega < 1e-4) {
      p = va.clone();
    } else {
      const s1 = Math.sin((1 - t) * omega) / Math.sin(omega);
      const s2 = Math.sin(t * omega) / Math.sin(omega);
      p = va.clone().multiplyScalar(s1).add(vb.clone().multiplyScalar(s2));
    }
    // arc bulges outward toward the middle for a "flight path" feel
    const bulge = 1 + 0.12 * Math.sin(Math.PI * t);
    pts.push(p.normalize().multiplyScalar(radius * lift * bulge));
  }
  return pts;
}

export function makeRouteFactory(radius) {
  // Returns a THREE.Line (dashed) connecting an ordered list of Vector3 surface points.
  function createRoute(vecStops, color = 0xffd24a) {
    const group = new THREE.Group();
    for (let i = 0; i < vecStops.length - 1; i++) {
      const pts = greatCirclePoints(vecStops[i], vecStops[i + 1], radius);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineDashedMaterial({
        color, dashSize: 0.12, gapSize: 0.08, transparent: true, opacity: 0.95,
        linewidth: 2,
      });
      const line = new THREE.Line(geo, mat);
      line.computeLineDistances(); // required for dashes to show
      group.add(line);
    }
    return group;
  }
  return { createRoute };
}
