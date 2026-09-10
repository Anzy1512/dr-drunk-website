# Three-dimensional language

## Source → geometry
The original mark places an amber drink within the wordmark and wraps it in a stethoscope. The hero translates those two elements into one composition: a glass coupe with amber liquid, ice and a citrus peel, accompanied by an amber/ivory spline and circular stethoscope head. Glassware is supported by the preliminary concept p1, company profile pp5–6 and supplied 6.png. The dark patterned cover becomes a physical stage texture.

## Materials and lighting
Lathed glass bowl, slender stem and base. Real geometry, physically based materials and environment reflections; no stock 3D asset. Warm amber liquid, translucent ice, restrained citrus color. Tube has a soft branded amber material and the head a dark inset. Use a procedural studio environment with broad white reflections, neutral fill and one warm rim. No bloom, chromatic aberration or chrome decoration. Keep text out of canvas.

## Scene architecture
One deferred Three.js canvas. Cocktail sculpture, stethoscope, lighting/environment, camera rig and renderer lifecycle remain separate modules. Geometry/profile parameters are constants. No concurrent canvases, network GLTF downloads, large HDR textures or postprocessing.

## Camera and motion
Hero object has a deliberately angled but legible silhouette. Scroll moves the camera and sculpture through two adjacent scenes, retaining the same object. Eased pointer rotation is capped. Slow movement communicates suspended composition. User can pause motion. Tab/background/viewport visibility stops rendering. Reduced motion renders a single stable frame where suitable; save-data, low memory, small screens or unavailable WebGL use real cocktail imagery.

## Performance
Cap DPR at 1.5 desktop and 1 on constrained displays. Use moderate 64-segment lathe profiles, shared materials, a small number of geometries and no shadows or heavy transmission render passes. Reuse geometry. ResizeObserver maintains aspect. Dispose renderer, geometry, materials, textures, environment targets and event handlers at unmount. Context loss reveals fallback and restoration can be triggered without blocking content.

## Mobile
Portrait arrival composition shows original drink photography in a deliberate crop. Editorial hierarchy and all interactions remain intact. Touch does not require dragging a canvas; native vertical scrolling remains available.
