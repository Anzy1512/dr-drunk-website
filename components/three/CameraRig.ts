import * as THREE from "three";

export function directCamera(
  camera: THREE.PerspectiveCamera,
  sculpture: THREE.Group,
  brand: THREE.Group,
  progress: number,
  pointer: THREE.Vector2,
  time: number,
  animated: boolean,
) {
  const p = THREE.MathUtils.clamp(progress, 0, 1);
  camera.position.set(0.2 + p * 0.8, 1.1 + p * 0.6, 6.5 - p * 0.4);
  camera.lookAt(0, 0.25, 0);
  const breathing = animated ? Math.sin(time * 0.55) * 0.025 : 0;
  sculpture.rotation.y = THREE.MathUtils.lerp(
    sculpture.rotation.y,
    -0.25 + p * 0.6 + pointer.x * 0.12,
    0.055,
  );
  sculpture.rotation.z = THREE.MathUtils.lerp(
    sculpture.rotation.z,
    -0.14 + p * 0.24 - pointer.x * 0.03,
    0.055,
  );
  sculpture.position.y = breathing - 0.15 * p;
  brand.rotation.y = p * -0.3 + pointer.x * 0.04;
  brand.position.y = breathing * 0.6;
}
