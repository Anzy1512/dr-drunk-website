import * as THREE from "three";

function tube(points: number[][], material: THREE.Material, radius = 0.038) {
  return new THREE.Mesh(
    new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3(
        points.map(
          (p) => new THREE.Vector3(...(p as [number, number, number])),
        ),
      ),
      100,
      radius,
      8,
      false,
    ),
    material,
  );
}

export function createStethoscope() {
  const group = new THREE.Group();
  const amber = new THREE.MeshStandardMaterial({
    color: 0xed9c39,
    roughness: 0.42,
    metalness: 0.12,
  });
  const ivory = new THREE.MeshStandardMaterial({
    color: 0xfbf3e4,
    roughness: 0.25,
    metalness: 0.25,
  });
  group.add(
    tube(
      [
        [-1.14, 1.52, -0.25],
        [-1.6, 1.15, -0.35],
        [-1.73, 0.25, -0.18],
        [-1.3, -0.75, 0.6],
        [-0.25, -1.2, 1.02],
        [1.05, -0.85, 0.74],
        [1.6, -0.2, 0.4],
        [1.56, 0.36, 0.3],
      ],
      amber,
    ),
  );
  group.add(
    tube(
      [
        [-1.14, 1.52, -0.25],
        [-0.9, 1.79, -0.25],
        [-0.94, 2.1, -0.25],
      ],
      ivory,
      0.026,
    ),
  );
  group.add(
    tube(
      [
        [-1.14, 1.52, -0.25],
        [-1.35, 1.87, -0.25],
        [-1.21, 2.18, -0.25],
      ],
      ivory,
      0.026,
    ),
  );
  const head = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.CylinderGeometry(0.21, 0.21, 0.085, 32),
    amber,
  );
  ring.rotation.x = Math.PI / 2;
  head.add(ring);
  const disc = new THREE.Mesh(
    new THREE.CylinderGeometry(0.158, 0.158, 0.09, 32),
    new THREE.MeshStandardMaterial({
      color: 0x241a10,
      roughness: 0.32,
      metalness: 0.3,
    }),
  );
  disc.rotation.x = Math.PI / 2;
  head.add(disc);
  head.position.set(1.56, 0.36, 0.33);
  head.rotation.y = 0.25;
  group.add(head);
  return group;
}
