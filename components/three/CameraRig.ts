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
  camera.position.set(0.15 + Math.sin(p * Math.PI) * 0.75, 1.05 + p * 0.75, 6.9 - Math.sin(p * Math.PI) * 0.45);
  camera.lookAt(0, 0.25, 0);
  const breathing = animated ? Math.sin(time * 0.55) * 0.025 : 0;
  sculpture.rotation.y = THREE.MathUtils.lerp(
    sculpture.rotation.y,
    -0.3 + p * 1.1 + pointer.x * 0.18,
    0.055,
  );
  sculpture.rotation.z = THREE.MathUtils.lerp(
    sculpture.rotation.z,
    -0.14 + p * 0.24 - pointer.x * 0.03,
    0.055,
  );
  sculpture.position.y = breathing - 0.08 * p;
  sculpture.rotation.x = 0.08 + pointer.y * 0.035;
  brand.rotation.y = p * -0.5 + pointer.x * 0.06;
  brand.position.y = breathing * 0.6;
}
