# Dr. Drunk — Your Party Practitioners

A nine-page brand experience built from the supplied company profile, cocktail collection, wedding storytelling guide, concept boards, and all 50 original photographs. The after-hours theme carries the deck's dark pattern, cream lettering and amber highlights throughout the site.

## Explore

- Home: an editorial introduction with a scroll-directed 3D cocktail and stethoscope.
- Cocktails: an interactive Three.js tasting scene and searchable 100-entry catalogue across ten source categories.
- Weddings: personal storytelling, six menu directions and creative details.
- Experiences: services, entertainment, flair and fourteen event gimmicks.
- Gallery: all 50 photographs in a three-photo desktop carousel, one-photo mobile slider, with arrows, swipe, keyboard controls and a full-image viewer.
- The practice: the team, named collaborations and four downloadable original guides.
- Contact: event planning prompts and the verified business email, telephone numbers and Instagram.
- FAQ: eight practical answers, linked to relevant content and matching structured data.
- Website information: how enquiries, external links, accessibility and supplied materials work.

## Run and validate

Requires Node.js 22.13 or newer. Install once with `npm ci`, then `npm run dev` for the local preview on port 5173. `npm run build` creates a Cloudflare Worker and client assets in `dist`. The Sites Vite plugin and `.openai/hosting.json` connect this checkout to its private hosted site.

Validation: `node node_modules/typescript/bin/tsc --noEmit` and `node node_modules/eslint/bin/eslint.js app components/layout components/sections components/three components/motion lib --max-warnings 0`.

On Windows, if an npm command shim is unavailable, invoke the installed npm CLI through Node directly. `npm start` previews the built Worker through Wrangler when local runtime permissions permit it.

## Implementation

React, TypeScript, Vinext, Three.js, GSAP/ScrollTrigger and accessible Radix UI controls. Brand colours and typography are defined in `app/globals.css`, with the site-wide dark treatment in `app/night-theme.css`. Content lives in `lib/brand-content.ts`, `lib/catalogue.ts`, `lib/faqs.ts`, and `lib/gallery-data.json`; page routes live in `app/`.

The 3D experience is deferred and has a source-photo fallback for mobile, reduced motion, constrained devices and WebGL failure. Scene rendering pauses out of view and in background tabs. GPU resources and animation listeners are disposed on route changes. Images are local optimized WebP; original PDFs download only when requested.

Contact actions open the visitor's email or phone app. There is no enquiry database, payment workflow, or automatic message sending. The catalogue represents the supplied concepts; final menu and availability are confirmed with the business. No fabricated testimonials, client metrics or event details are included.

## Design and source documentation

- `BRAND_ANALYSIS.md`: brand DNA, palette, typography and voice.
- `3D_LANGUAGE.md`: source-derived geometry, materials and interaction.
- `ASSET_MANIFEST.md`: assets, treatments and provenance.
- `EXPERIENCE_ARCHITECTURE.md`: story, information architecture and components.
- `docs/CONTENT_COVERAGE.md`: coverage of all supplied documents.
- `docs/QA.md`: completed checks and practical limitations.
- `docs/licenses/`: licenses for bundled open-source fonts.

The four source PDFs remain available unchanged in `public/guides`. Gallery image provenance is retained in `lib/gallery-data.json`. User-provided source materials retain their original ownership.
