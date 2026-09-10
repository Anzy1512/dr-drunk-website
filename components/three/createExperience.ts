import * as THREE from "three";
import { createCocktail } from "./CocktailSculpture";
import { createStethoscope } from "./BrandStethoscope";
import { createLighting } from "./StudioLighting";
import { directCamera } from "./CameraRig";

export type Experience={dispose:()=>void;setPaused:(paused:boolean)=>void};

export function createExperience(host:HTMLDivElement,opening:HTMLElement,onReady:()=>void,onFailure:()=>void):Experience{
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
  renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;
  renderer.transmissionResolutionScale=.5;
  renderer.domElement.setAttribute('aria-hidden','true');host.appendChild(renderer.domElement);
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(40,1,.1,30);
  const sculpture=createCocktail(),brand=createStethoscope();scene.add(sculpture,brand);
  const disposeLighting=createLighting(renderer,scene);
  const pointer=new THREE.Vector2();let paused=false,visible=true,lost=false,disposed=false,frame=0,start=performance.now();
  function draw(now:number){
    frame=0;if(disposed||lost||!visible||document.hidden)return;
    const rect=opening.getBoundingClientRect();
    const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height-window.innerHeight)));
    directCamera(camera,sculpture,brand,progress,pointer,(now-start)/1000,!paused);
    try{renderer.render(scene,camera);}catch{onFailure();return;}
    if(!paused)frame=requestAnimationFrame(draw);
  }
  function invalidate(){if(!frame&&!disposed)frame=requestAnimationFrame(draw);}
  const resize=new ResizeObserver(()=>{const {width,height}=host.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();invalidate();});resize.observe(host);
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)invalidate();else{cancelAnimationFrame(frame);frame=0;}},{rootMargin:'80px'});observer.observe(opening);
  const move=(e:PointerEvent)=>{if(paused)return;const rect=host.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,(e.clientY-rect.top)/rect.height*2-1);};
  const reset=()=>pointer.set(0,0);
  const visibility=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else invalidate();};
  const contextLost=(e:Event)=>{e.preventDefault();lost=true;cancelAnimationFrame(frame);frame=0;onFailure();};
  const contextRestored=()=>{lost=false;start=performance.now();onReady();invalidate();};
  host.addEventListener('pointermove',move);host.addEventListener('pointerleave',reset);
  window.addEventListener('scroll',invalidate,{passive:true});document.addEventListener('visibilitychange',visibility);
  renderer.domElement.addEventListener('webglcontextlost',contextLost);renderer.domElement.addEventListener('webglcontextrestored',contextRestored);
  const bounds=host.getBoundingClientRect();renderer.setSize(bounds.width,bounds.height);camera.aspect=bounds.width/bounds.height;camera.updateProjectionMatrix();
  directCamera(camera,sculpture,brand,0,pointer,0,false);renderer.render(scene,camera);onReady();invalidate();
  return {setPaused(value){paused=value;pointer.set(0,0);if(paused){cancelAnimationFrame(frame);frame=0;}invalidate();},dispose(){disposed=true;cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',reset);window.removeEventListener('scroll',invalidate);document.removeEventListener('visibilitychange',visibility);renderer.domElement.removeEventListener('webglcontextlost',contextLost);renderer.domElement.removeEventListener('webglcontextrestored',contextRestored);const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();scene.traverse(obj=>{if(obj instanceof THREE.Mesh){geometries.add(obj.geometry);for(const material of Array.isArray(obj.material)?obj.material:[obj.material])materials.add(material);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());disposeLighting();renderer.dispose();renderer.domElement.remove();}};
}
