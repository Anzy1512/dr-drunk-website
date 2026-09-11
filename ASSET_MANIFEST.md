# Asset and 3D manifest

The complete source inventory lives in `docs/source-inventory.json`. Source review renders stay outside the site. Web assets are resized/re-encoded from supplied images; the original sources remain unchanged.

| Original | Class / interpretation | Website asset or geometry | Usage / motion | Fallback / priority |
|---|---|---|---|---|
| Profile p1 embedded X4.png | A: original logo | Crop retaining wordmark, drink and stethoscope; no redraw | Header; footer uses live typographic text to avoid a repeated image | Same image / critical |
| Profile p1 background | C: isometric textile pattern | Unmarked crop | Dark scene and footer texture | CSS solid dark / low |
| Profile p1 drink-letter + p5 glassware; ZIP 6.png | B: physical cocktail craft | Lathed coupe, liquid volume, ice cubes, citrus peel | Hero + discovery; eased scroll and pointer | 6.png photo / critical visual, deferred GPU |
| Profile p1 stethoscope | B/D: party-practitioner signature | Spline tube, twin ears, round head | Continuous framing of the cocktail | Original logo / medium |
| Profile p6 X4.jpg / X8.jpg / X9.jpg | A: cocktail photographs | Responsive WebP | Menu editorial stills | Same image / medium |
| ZIP 6.png | A: amber and clear coupe drinks | cocktail-toast.webp | Hero mobile and WebGL fallback | Same / high |
| ZIP 11.png | A: couple celebrating | couple.webp | Story chapter portrait | Static / medium |
| ZIP 16.png | A: personalized drink stirrers | details.webp | Bespoke detail chapter | Static / medium |
| ZIP 7.png | A: theatrical bar setup | bar.webp | Event gallery | Static / medium |
| ZIP IMG_4596.JPG | A: live dancefloor | party.webp | Event gallery | Static / medium |
| ZIP 12.png | A: saxophonist | sax.webp | Entertainment gallery | Static / medium |
| ZIP 5.png | A: costume performance | flair.webp | Entertainment gallery | Static / medium |
| Profile p4 X22.jpg | A: actual team | team.webp | People section | Static / medium |
| Storytelling pp3–6 | E/B: memory-lane menu | DOM milestone timeline with spatial photographic layers | Accessible chapter buttons update copy | Fully readable DOM / high |
| Profile pp17–18 | E: previous collaborators | Names only as provided | People section | DOM / low |
| Profile p20 | E: contact information | Email / telephone / Instagram links | Conversion | Native HTML / critical |

The user's subsequent request to include all information and elements authorizes the expanded archive: all 50 ZIP photos are optimized under `public/gallery/`, with filename provenance and descriptive alternatives in `lib/gallery-data.json`. The four original, unchanged PDFs are available under `public/guides/` and linked contextually as well as from About. No unrelated generated imagery, external model or unlicensed embedded font is used. Logo and photo crops are production derivatives authorized by the brief's extraction/optimization requirements.

## 12 September additions

`ServingObjects.tsx` interprets the teapot service (IMG_4582.JPG / event-38), textured green glassware (IMG_4575.JPG / event-32), and personalised stirrers (16.png / event-08) as original amber line illustrations. These are contextual vector artwork, not claims of additional event photography. `NightEmblem.tsx` adds an original three-frame cocktail/archive illustration and slow decorative orbit to the gallery introduction.

The gallery retains each of the 50 photos once, without cloned carousel slides. Opening a full-size photo temporarily replaces its thumbnail. About uses event-42 as its introduction; Weddings uses event-12. Story chapters use couple.webp, event-32 and event-22, avoiding duplicates elsewhere on the same page. Cross-page reuse of a relevant source photograph remains intentional.
