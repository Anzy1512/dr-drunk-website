import * as THREE from "three";

/** Citrus, mint, carbonation and liquid light: all from the deck's drink vocabulary. */
export function createFlavourTheatre() {
  const group = new THREE.Group();
  group.name = "flavour-theatre";
  const wheel = new THREE.Group();
  const rind = new THREE.MeshStandardMaterial({ color: 0xf0a125, roughness: 0.48 });
  const pith = new THREE.MeshStandardMaterial({ color: 0xffe3a4, roughness: 0.6, side: THREE.DoubleSide });
  const flesh = new THREE.MeshPhysicalMaterial({ color: 0xffad37, roughness: 0.27, clearcoat: 0.8, side: THREE.DoubleSide });
  const edge = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.035, 8, 40), rind);
  wheel.add(edge, new THREE.Mesh(new THREE.CircleGeometry(0.335, 40), pith));
  for (let i = 0; i < 9; i++) {
    const wedge = new THREE.Mesh(new THREE.CircleGeometry(0.295, 8, i * Math.PI * 2 / 9 + 0.045, Math.PI * 2 / 9 - 0.09), flesh);
    wedge.position.z = 0.008;
    wheel.add(wedge);
  }
  wheel.position.set(-1.32, 0.78, 0.6);
  wheel.rotation.set(0.22, 0.3, -0.35);
  group.add(wheel);
  const mint = new THREE.Group();
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, -0.25); leafShape.bezierCurveTo(-0.35, -0.05, -0.3, 0.3, 0, 0.55); leafShape.bezierCurveTo(0.32, 0.3, 0.32, -0.06, 0, -0.25);
  const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x819044, roughness: 0.6, side: THREE.DoubleSide });
  const leafGeometry = new THREE.ShapeGeometry(leafShape, 16);
  const veinMaterial = new THREE.MeshStandardMaterial({ color: 0xb7be6b, roughness: 0.65 });
  for (let i = 0; i < 2; i++) {
    const leaf = new THREE.Group();
    leaf.add(new THREE.Mesh(leafGeometry, leafMaterial));
    const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.004, 0.7, 6), veinMaterial);
    vein.position.set(0, 0.1, 0.014); leaf.add(vein);
    leaf.rotation.z = i ? -0.65 : 0.35; leaf.position.x = i * 0.16;
    mint.add(leaf);
  }
  mint.position.set(1.35, -0.85, 0.5); mint.scale.setScalar(0.7);
  group.add(mint);
  const bubbles = new THREE.InstancedMesh(new THREE.SphereGeometry(0.024, 8, 6), new THREE.MeshPhysicalMaterial({color:0xffedc5,metalness:0.12,roughness:0.1,transparent:true,opacity:0.55}), 18);
  bubbles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const transform = new THREE.Object3D();
  const shimmer = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { time: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform float time;varying vec2 vUv;void main(){vec2 p=vUv-.5;float d=length(p);float ring=pow(.5+.5*sin(d*95.-time*1.5+sin(p.x*12.)),12.);float edge=1.-smoothstep(.35,.5,d);float glint=pow(max(0.,1.-length(p-vec2(.14,.09))*2.),6.);gl_FragColor=vec4(1.,.89,.65,(ring*.095+glint*.15)*edge);}`,
  });
  const surface = new THREE.Mesh(new THREE.CircleGeometry(0.99, 48), shimmer);
  surface.rotation.x = -Math.PI / 2; surface.position.y = 0.768;
  // Attach the surface to the glass so the liquid stays aligned during camera direction.
  return { group, surface, bubbles, update(time: number, progress: number) {
    shimmer.uniforms.time.value = time;
    wheel.position.y = 0.8 + Math.sin(time * 0.7) * 0.08 + progress * 0.3;
    wheel.rotation.z = -0.35 + Math.sin(time * 0.4) * 0.15 + progress * 0.9;
    wheel.rotation.y = 0.3 + Math.sin(time * 0.35) * 0.22;
    mint.rotation.z = Math.sin(time * 0.5) * 0.14 - progress * 0.3;
    mint.position.y = -0.85 + Math.cos(time * 0.6) * 0.06;
    for (let i = 0; i < 18; i++) {
      const phase = (i / 18 + time * 0.035) % 1;
      const angle = i * 2.39996;
      const radius = 0.4 + (i % 4) * 0.07;
      transform.position.set(Math.cos(angle) * radius, 0.4 + phase * 0.55, Math.sin(angle) * radius);
      transform.scale.setScalar((0.35 + Math.sin(phase * Math.PI) * 0.65) * (0.6 + (i % 3) * 0.22));
      transform.updateMatrix(); bubbles.setMatrixAt(i, transform.matrix);
    }
    bubbles.instanceMatrix.needsUpdate = true;
  } };
}
