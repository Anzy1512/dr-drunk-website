# Experience architecture

| Chapter | Purpose / source | Visual and motion | Interaction |
|---|---|---|---|
| Arrival | Party practitioners; profile pp1–2 | Cream invitation, original mark, condensed display type, dominant amber/glass sculpture | Explore cocktails; book a tasting; pause movement |
| The practice | Explain total bar solution; profile pp2–5,19 | The same sculpture moves across a sticky stage as the copy changes; dark pattern and annotations | Native scroll; source-backed service list |
| Cocktail lab | Explore a curated selection from menu pp3–5,8,12 | Cream split menu, orange numerals, drink still from profile | Category filters, ingredient list, email tasting CTA |
| Your story, served | Explain wedding customization; storytelling pp2–10 | Real portrait photography; handwritten accent and chapter timeline | Select First date / First trip / The proposal; no invented client story |
| After the first sip | Demonstrate flair, props, personal details; profile pp9–16, concept pp1–5 and ZIP | Asymmetric photo sequence with depth and readable captions | Photo links to source Instagram profile; keyboard accessible |
| The people behind the pour | Profile team pp3–4 and collabs pp17–18 | Original team photograph, warm copy, credited collaboration names | Readable static content |
| Appointment | Profile p20, tasting p13 | Dark pattern from cover, oversized invitation | Prefilled email, direct phone and Instagram links |

The initial single-route experience was built, typechecked, linted, production-built and tested before the user's follow-up expansion. It is checkpointed in Git as `a925ae8`.

## Authorized multi-page expansion
- `/`: preserves the original immersive arrival and editorial journey.
- `/cocktails`: interactive Three.js/GSAP flavour scene; a searchable 100-entry catalogue spanning all ten source categories. The count includes repeated names across categories, exactly as the source does. No unsupported legal claim is carried forward from the specialty-category heading.
- `/weddings`: all storytelling themes, three interactive memory chapters, timeline/QR-menu ideas, themed glassware, personalization and creative concepts.
- `/experiences`: cocktail development, custom menus, tailored setups, service, hospitality, tasting, supporting essentials and the full named gimmick list.
- `/gallery`: all 50 supplied ZIP photographs, lazy loaded with a paginated reveal and accessible image viewer.
- `/about`: brand introduction, team, previous collaborations and all four original PDF guides.
- `/contact`: tasting preparation and original contact channels; no fake booking confirmation.

Shared header/footer, active navigation, mobile sheet, page-specific metadata, canonical links, sitemap, robots and 404 route. Important content is server-rendered HTML. The original guides preserve details not practical to transcribe (artwork, original page compositions and reference video links). Actual source PDFs remain unchanged.
