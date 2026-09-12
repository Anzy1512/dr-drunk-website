# Brand motion update — 11 September 2026

The existing seven pages and source content are preserved. New visual work follows the supplied deck's cream paper (#FBF3E4), amber (#ED9C39), near-black stage, geometric background tile, drink illustrations and doctor/bar wordplay.

## 21st.dev references reviewed

- [Liquid Glass collection](https://21st.dev/community/components/s/liquid-glass): translucent layered surfaces, warm highlights, soft borders and restrained depth. Adapted into a cream/amber navigation surface, sliding highlight, serve selector and illustrated cards.
- [Tilted Dock by Ruixen](https://21st.dev/@ruixen.ui/components/tilted-dock): shallow pointer-responsive tilt and lifted hover states. Adapted into low-amplitude GSAP card tilt, preserving native links and focus behavior.
- [Modern hero section by Sonu Kumar](https://21st.dev/@uniquesonu/components/modern-hero-section): staggered floating shapes. Adapted into original cocktail, citrus, shaker and celebration line illustrations.
- [Floating navbar guidance](https://21st.dev/blog/react-floating-navbar-components): legibility, anchor offsets and limited mobile space informed the responsive header.

These are visual and interaction references, not vendored copies of third-party component source. The implementation uses the project's existing GSAP and Radix dependencies with original TSX/SVG/CSS. No additional animation library, external runtime embed or remote UI package is introduced.

## New artwork and behavior

`BrandIllustration.tsx` contains four original scalable line illustrations: a coupe entwined with a stethoscope, citrus, cocktail shaker, and a toast with a heart. `IllustratedPractice.tsx` presents three linked illustrated glass cards. Ink draws when cards enter view; the garnish turns and line art rises on hover. Original event photography remains the evidence for actual events and service.

`BrandAtmosphere.tsx` reuses the exact supplied pattern tile. The 12 September after-hours theme removes the earlier cream-paper inversion and blends it softly into a dark ink surface with low-opacity amber artwork and two small glass bubbles. It never intercepts pointer input. Decorative motion can be paused and stops in background tabs. Reduced-motion preferences disable the animations.

The header has a shared animated glass highlight on hover/focus, rolling labels, warm translucent booking control, and an accessible mobile sheet with chapter numbers and original artwork. Native page links retain the previous production navigation fix. Fine-pointer tilt is limited to 2.5 degrees per axis and disabled for touch/reduced motion.

## Theatre.js and dimensional interaction pass

Theatre.js 0.7.2 is installed as the requested production animation engine. `lib/motion-score.ts` defines three authored tracks: an ambient light/drift loop, a scroll-controlled card reveal, and the cocktail's garnish/rotation flourish. `TheatreMotion.tsx` links these values to shared styling and scroll position. The actual Three.js scene subscribes to the Pour score; the Swirl button plays that sequence. Theatre Studio is not shipped. Existing GSAP camera transitions, Three.js physical glass and accessibility fallbacks remain.

The latest [21st.dev Spotlight guidance](https://21st.dev/blog/react-spotlight-effect-components), [3D Card reference](https://21st.dev/%40kavikatiyar/components/3d-card), and [Tilt reference](https://21st.dev/%40ibelick/components/tilt) informed pointer-following amber light and shallow card perspective. The implementation is original code using existing primitives. Pointer tracking writes CSS variables through one grid handler; touch and reduced motion retain readable, operable cards. Native details allow keyboard expansion/collapse.

Theatre API behavior follows its [official Core documentation](https://www.theatrejs.com/docs/latest/api/core). Ambient playback pauses when the page is hidden or the ambient control is paused. Reduced-motion CSS removes the new decorative transitions and perspective. The Three.js scene retains its separate pause control and mobile fallback.
