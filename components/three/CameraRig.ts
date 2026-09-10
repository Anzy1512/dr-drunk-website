import * as THREE from "three";

export function directCamera(camera:THREE.PerspectiveCamera,sculpture:THREE.Group,brand:THREE.Group,progress:number,pointer:THREE.Vector2,time:number,animated:boolean){
  const p=THREE.MathUtils.clamp(progress,0,1);
  camera.position.set(.2+p*.8,1.1+p*.6,6.5-p*.4);
  camera.lookAt(0,.25,0);
  const breathing=animated?Math.sin(time*.55)*.025:0;
  sculpture.rotation.y=THREE.MathUtils.lerp(sculpture.rotation.y,-.25+p*.6+pointer.x*.12,.055);
  sculpture.rotation.z=THREE.MathUtils.lerp(sculpture.rotation.z,-.14+p*.24-pointer.x*.03,.055);
  sculpture.position.y=breathing-.15*p;
  brand.rotation.y=p*-.3+pointer.x*.04;
  brand.position.y=breathing*.6;
}
