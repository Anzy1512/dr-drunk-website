import * as THREE from "three";

function tube(points:number[][],material:THREE.Material,radius=.038){return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p as [number,number,number]))),100,radius,8,false),material);}

export function createStethoscope(){
  const group=new THREE.Group();
  const amber=new THREE.MeshStandardMaterial({color:0xed9c39,roughness:.42,metalness:.12});
  const ivory=new THREE.MeshStandardMaterial({color:0xfbf3e4,roughness:.25,metalness:.25});
  group.add(tube([[-1.14,1.52,-.25],[-1.6,1.15,-.35],[-1.73,.25,-.18],[-1.3,-.75,.6],[-.25,-1.2,1.02],[1.05,-.85,.74],[1.6,-.2,.4],[1.56,.36,.3]],amber));
  group.add(tube([[-1.14,1.52,-.25],[-.9,1.79,-.25],[-.94,2.1,-.25]],ivory,.026));
  group.add(tube([[-1.14,1.52,-.25],[-1.35,1.87,-.25],[-1.21,2.18,-.25]],ivory,.026));
  const head=new THREE.Group();
  const ring=new THREE.Mesh(new THREE.CylinderGeometry(.21,.21,.085,32),amber);ring.rotation.x=Math.PI/2;head.add(ring);
  const disc=new THREE.Mesh(new THREE.CylinderGeometry(.158,.158,.09,32),new THREE.MeshStandardMaterial({color:0x241a10,roughness:.32,metalness:.3}));disc.rotation.x=Math.PI/2;head.add(disc);
  head.position.set(1.56,.36,.33);head.rotation.y=.25;group.add(head);
  return group;
}
