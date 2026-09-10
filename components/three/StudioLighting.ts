import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export function createLighting(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
) {
  const room = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(room, 0.03);
  scene.environment = environment.texture;
  scene.environmentIntensity = 0.85;
  const key = new THREE.DirectionalLight(0xfff7df, 2);
  key.position.set(-3, 5, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffad42, 1.3);
  rim.position.set(4, 2, -2);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  room.dispose();
  pmrem.dispose();
  return () => environment.dispose();
}
