import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const BOWL_PROFILE = [[0,0],[.22,.06],[.49,.16],[.76,.32],[.98,.57],[1.13,.87],[1.17,1.04],[1.14,1.065],[1.105,.9],[.94,.61],[.73,.38],[.45,.23],[.2,.14],[0,.12]];

export function createCocktail() {
  const group = new THREE.Group();
  const glass = new THREE.MeshPhysicalMaterial({color:0xfff9ed,roughness:.07,metalness:0,transmission:.97,ior:1.46,thickness:.14,transparent:true,opacity:1,envMapIntensity:1.5});
  const polished = new THREE.MeshPhysicalMaterial({color:0xfff3d9,roughness:.1,metalness:.18,transparent:true,opacity:.55,envMapIntensity:1.5,clearcoat:1});
  const bowl = new THREE.Mesh(new THREE.LatheGeometry(BOWL_PROFILE.map(([x,y])=>new THREE.Vector2(x,y)),64),glass);
  group.add(bowl);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(.044,.07,1.5,20),glass);
  stem.position.y=-.72;group.add(stem);
  const foot = new THREE.Mesh(new THREE.LatheGeometry([[0,-1.53],[.68,-1.53],[.75,-1.5],[.64,-1.46],[.19,-1.4],[.065,-1.3]].map(([x,y])=>new THREE.Vector2(x,y)),48),glass);
  group.add(foot);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.153,.015,8,64),polished);
  rim.rotation.x=Math.PI/2;rim.position.y=1.048;group.add(rim);
  const liquidMaterial = new THREE.MeshPhysicalMaterial({color:0xd8770d,roughness:.18,metalness:.08,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:.85});
  const liquid = new THREE.Mesh(new THREE.LatheGeometry([[0,.14],[.2,.14],[.45,.23],[.73,.38],[.94,.61],[1.015,.76],[0,.76]].map(([x,y])=>new THREE.Vector2(x,y)),64),liquidMaterial);
  group.add(liquid);
  const iceGeometry = new RoundedBoxGeometry(.42,.42,.42,2,.055);
  const iceMaterial = new THREE.MeshPhysicalMaterial({color:0xfbf3df,roughness:.09,transmission:.72,thickness:.3,ior:1.31,transparent:true,opacity:.9,envMapIntensity:1.9});
  const icePositions = [[-.41,.81,.15,.3],[.21,.82,-.28,-.1],[.26,.79,.34,.65]];
  for(const [x,y,z,angle] of icePositions){const ice=new THREE.Mesh(iceGeometry,iceMaterial);ice.position.set(x,y,z);ice.rotation.set(angle,.4,angle*.5);group.add(ice);}
  // A real ribbon mesh follows a citrus spiral; it is not an unrelated abstract form.
  const vertices:number[]=[];const indices:number[]=[];const count=80;
  for(let i=0;i<=count;i++){
    const t=i/count,angle=t*Math.PI*2.1;
    const x=.59+Math.cos(angle)*.24,y=.9+t*.72,z=Math.sin(angle)*.23;
    vertices.push(x,y-.055,z,x,y+.055,z);
    if(i<count){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}
  }
  const peelGeometry=new THREE.BufferGeometry();peelGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));peelGeometry.setIndex(indices);peelGeometry.computeVertexNormals();
  const peel=new THREE.Mesh(peelGeometry,new THREE.MeshStandardMaterial({color:0xffaa21,roughness:.55,side:THREE.DoubleSide}));
  peel.rotation.z=-.24;group.add(peel);
  group.rotation.set(.08,-.25,-.14);
  return group;
}
