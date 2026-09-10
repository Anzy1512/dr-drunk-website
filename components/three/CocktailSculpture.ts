import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const BOWL_PROFILE = [
  [0, 0],
  [0.22, 0.06],
  [0.49, 0.16],
  [0.76, 0.32],
  [0.98, 0.57],
  [1.13, 0.87],
  [1.17, 1.04],
  [1.14, 1.065],
  [1.105, 0.9],
  [0.94, 0.61],
  [0.73, 0.38],
  [0.45, 0.23],
  [0.2, 0.14],
  [0, 0.12],
];

export function createCocktail() {
  const group = new THREE.Group();
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xfff9ed,
    roughness: 0.07,
    metalness: 0,
    transmission: 0.97,
    ior: 1.46,
    thickness: 0.14,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.5,
  });
  const polished = new THREE.MeshPhysicalMaterial({
    color: 0xfff3d9,
    roughness: 0.1,
    metalness: 0.18,
    transparent: true,
    opacity: 0.55,
    envMapIntensity: 1.5,
    clearcoat: 1,
  });
  const bowl = new THREE.Mesh(
    new THREE.LatheGeometry(
      BOWL_PROFILE.map(([x, y]) => new THREE.Vector2(x, y)),
      64,
    ),
    glass,
  );
  group.add(bowl);
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.044, 0.07, 1.5, 20),
    glass,
  );
  stem.position.y = -0.72;
  group.add(stem);
  const foot = new THREE.Mesh(
    new THREE.LatheGeometry(
      [
        [0, -1.53],
        [0.68, -1.53],
        [0.75, -1.5],
        [0.64, -1.46],
        [0.19, -1.4],
        [0.065, -1.3],
      ].map(([x, y]) => new THREE.Vector2(x, y)),
      48,
    ),
    glass,
  );
  group.add(foot);
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(1.153, 0.015, 8, 64),
    polished,
  );
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 1.048;
  group.add(rim);
  const liquidMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd8770d,
    roughness: 0.18,
    metalness: 0.08,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 0.85,
  });
  const liquid = new THREE.Mesh(
    new THREE.LatheGeometry(
      [
        [0, 0.14],
        [0.2, 0.14],
        [0.45, 0.23],
        [0.73, 0.38],
        [0.94, 0.61],
        [1.015, 0.76],
        [0, 0.76],
      ].map(([x, y]) => new THREE.Vector2(x, y)),
      64,
    ),
    liquidMaterial,
  );
  liquid.name = "cocktail-liquid";
  group.add(liquid);
  const iceGeometry = new RoundedBoxGeometry(0.42, 0.42, 0.42, 2, 0.055);
  const iceMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xfbf3df,
    roughness: 0.09,
    transmission: 0.72,
    thickness: 0.3,
    ior: 1.31,
    transparent: true,
    opacity: 0.9,
    envMapIntensity: 1.9,
  });
  const icePositions = [
    [-0.41, 0.81, 0.15, 0.3],
    [0.21, 0.82, -0.28, -0.1],
    [0.26, 0.79, 0.34, 0.65],
  ];
  for (const [x, y, z, angle] of icePositions) {
    const ice = new THREE.Mesh(iceGeometry, iceMaterial);
    ice.position.set(x, y, z);
    ice.rotation.set(angle, 0.4, angle * 0.5);
    group.add(ice);
  }
  // A real ribbon mesh follows a citrus spiral; it is not an unrelated abstract form.
  const vertices: number[] = [];
  const indices: number[] = [];
  const count = 80;
  for (let i = 0; i <= count; i++) {
    const t = i / count,
      angle = t * Math.PI * 2.1;
    const x = 0.59 + Math.cos(angle) * 0.24,
      y = 0.9 + t * 0.72,
      z = Math.sin(angle) * 0.23;
    vertices.push(x, y - 0.055, z, x, y + 0.055, z);
    if (i < count) {
      const n = i * 2;
      indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
    }
  }
  const peelGeometry = new THREE.BufferGeometry();
  peelGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  peelGeometry.setIndex(indices);
  peelGeometry.computeVertexNormals();
  const peel = new THREE.Mesh(
    peelGeometry,
    new THREE.MeshStandardMaterial({
      color: 0xffaa21,
      roughness: 0.55,
      side: THREE.DoubleSide,
    }),
  );
  peel.rotation.z = -0.24;
  group.add(peel);
  group.rotation.set(0.08, -0.25, -0.14);
  return group;
}
