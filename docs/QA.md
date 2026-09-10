# Validation record — 10 September 2026

## Completed

- Read all 51 source PDF pages and reviewed all 50 supplied photographs before design implementation. Source coverage and visual provenance are recorded separately.
- TypeScript `--noEmit`: passed. ESLint across application, layout, sections, motion, Three.js and content: passed with zero warnings.
- Sites production build: passed. Built server module imports successfully and exports `default.fetch`.
- Exercised the compiled Worker through a local Node HTTP adapter: all seven page routes, sitemap and robots returned 200; an unknown route returned 404. Every page has one H1, a title and a description.
- Verified all literal local asset references resolve, all 50 gallery image paths are distinct, and all four downloadable PDFs match their supplied originals byte for byte.
- Browser checks: homepage cocktail tabs and wedding chapters switch content; catalogue ingredient search, category selection, empty results and reset work; featured cocktail selection updates copy and the desktop liquid colour; motion pause updates its accessible pressed state.
- Gallery: initially 12 images, More moments expands to 24, full-image dialog opens, next-photo updates the displayed image, and Escape dismisses the viewer. Checked dialog layout at desktop and 390px phone width.
- Mobile navigation opens and closes, and its Cocktails link reaches the correct page in the compiled build. Page headings and horizontal bounds checked at 390 × 844 for cocktails, weddings, experiences, about and contact. Homepage mobile layout was also visually reviewed. The mobile layout uses original photography in place of WebGL.
- Desktop Three.js scene initializes with one canvas and its ready state. Checked composition at 1440 × 900. The source implements background/offscreen suspension, context-loss fallback, resource disposal and reduced-motion media handling.
- Production navigation regression fixed: Vinext beta's Link prefetch/transition failed in the compiled browser bundle. Navigation uses native semantic links for reliable document navigation and JavaScript-independent page access. No new console errors appeared on the repaired route checks.

## Performance and limits

The deferred scene chunk is 609,439 bytes minified / 157,356 bytes gzip. It is separated from the initial application and skipped on the mobile/reduced-motion/constrained-device fallback path. Selected brand WebP images total approximately 1.7 MB; the complete gallery approximately 5.2 MB, loaded progressively with lazy images. The original PDF guides are large downloads (roughly 16–23 MB each) and are not fetched during normal page reading.

The build reports a >500 kB chunk advisory for the deferred Three.js scene, plus Vinext beta's route-classification notice. Neither prevents the completed build. No field Core Web Vitals, low-end physical-device FPS, or cross-browser Safari measurement is claimed. Reduced-motion and context-loss paths were inspected in source; exhaustive hardware emulation was not performed.

The local Wrangler preview encountered an environment filesystem restriction. Compiled output was exercised through its actual fetch export with a Node adapter; hosted Worker deployment remains the production environment. Enquiry actions open the visitor's email/telephone app and were verified as links without sending messages or placing calls.

This is a narrative marketing website; its central journey is reading, navigating, selecting inspiration and opening source material. It does not perform backend transactions or need a WebMCP mutation surface.
