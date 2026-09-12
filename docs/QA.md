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

The deferred scene chunk is 582,745 bytes minified / 146,744 bytes gzip (11 September motion build). It is separated from the initial application and skipped on the mobile/reduced-motion/constrained-device fallback path. Selected brand WebP images total approximately 1.7 MB; the complete gallery approximately 5.2 MB, loaded progressively with lazy images. The original PDF guides are large downloads (roughly 16–23 MB each) and are not fetched during normal page reading.

The build reports a >500 kB chunk advisory for the deferred Three.js scene, plus Vinext beta's route-classification notice. Neither prevents the completed build. No field Core Web Vitals, low-end physical-device FPS, or cross-browser Safari measurement is claimed. Reduced-motion and context-loss paths were inspected in source; exhaustive hardware emulation was not performed.

The local Wrangler preview encountered an environment filesystem restriction. Compiled output was exercised through its actual fetch export with a Node adapter; hosted Worker deployment remains the production environment. Enquiry actions open the visitor's email/telephone app and were verified as links without sending messages or placing calls.

This is a narrative marketing website; its central journey is reading, navigating, selecting inspiration and opening source material. It does not perform backend transactions or need a WebMCP mutation surface.


## 11 September motion completion

TypeScript and application ESLint passed. The final Sites production build passed after the spacing corrections. Browser inspection confirmed the citrus/mint scene on home and cocktails, working pause state, Guava Island selection and liquid colour, the scrolling ribbon and illustration entrances, and mobile glass navigation to Cocktails. No console errors or warnings were reported in the updated preview tab. Desktop horizontal scroll width equals the document viewport width; the hero note clears the footer line by 49px. The cocktail page also has no horizontal overflow at 390px. Existing content and catalogue/gallery checks above remain applicable because their source data and interactions were preserved.

The local preview process was restored after the interrupted session. The browser retained an inaccessible connection-error tab, so the working preview was opened in a replacement tab. Source requirements are mapped in REQUEST_AUDIT.md.

## 12 September dark theme and gallery completion

The new gallery replaces the earlier progressive grid. Desktop checks at 1440 × 900 confirmed three photos per group, 01–03 to 04–06 movement, End reaching 48–50 with Next disabled, full-image navigation from photo 48 to 49, and Escape dismissal. At 390 × 844 the rail and slide widths match (330px), showing one photo at a time with no document overflow. Home returns to the first photo. All 50 original entries remain available.

Mobile glass navigation opened and reached Experiences. FAQ opens through the Enter key. Dark theme, photo captions, source-derived serving illustrations, shared footer and focus treatment were visually inspected. The desktop homepage initializes one Three.js canvas. No browser console errors or warnings were reported in these checks.

The compiled Worker returned 200 for all nine pages, sitemap and robots, and 404 for an unknown route. Every page has exactly one H1, metadata, a canonical, social image metadata and valid Organization JSON-LD. FAQPage contains all eight questions; sitemap contains nine URLs. No repeated image sources occur within any of the nine server-rendered pages. The gallery has 50 unique photo sources plus the single header logo.

TypeScript, application ESLint and Sites production build passed. The known deferred Three.js chunk advisory and Vinext route-classification notice remain non-blocking. Physical-device performance and Safari coverage retain the limitations documented above.

## Theatre.js and interaction update

TypeScript and application ESLint passed. The Sites production build passed with eight page routes after removal of Website Information. A compiled-Worker check confirmed all eight pages, sitemap and robots return 200, and `/site-info` returns 404. Each remaining page has one H1, metadata, canonical and valid structured data, with no same-page duplicate image sources.

Browser checks at 1440 × 900: the Theatre score reports ready, the cocktail page creates one WebGL canvas, Guava Island updates the source-grounded description and liquid, viewpoint selection and Swirl controls operate, and the Guava ingredient shortcut returns the single matching catalogue entry. The Spice It Up mood previews its source entries and filters the catalogue to ten entries. Wedding cards collapse by click and reopen with Enter. No console errors or warnings were reported.

At 390 × 844, Cocktails and Experiences have no document overflow. Cocktails uses the original photo fallback without a canvas; mood tabs scroll horizontally within their own rail. Selecting Smoke bubble cocktails updates the entertainment panel and its explicit email subject without sending a message. Mobile cards, captions and controls remain readable. All source content and the 50-photo gallery remain preserved.

The logo asset is the original artwork embedded in an SVG with an alpha filter. Generated attempts with distorted edges were excluded from publication. The header background behind the logo is explicitly transparent. The new score pauses for hidden documents and the ambient control; reduced-motion CSS removes new perspective/reveal animation. The prior hardware/Safari limitations still apply.
