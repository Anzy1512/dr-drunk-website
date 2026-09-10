import { PageIntro } from "@/components/layout/PageIntro";
import { EventArchive } from "@/components/sections/EventArchive";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Good Times Gallery",
  "A photo archive of Dr. Drunk cocktails, bespoke bars, entertainment and celebrations.",
  "/gallery",
);
export default function Gallery() {
  return (
    <main id="main">
      <PageIntro
        chapter="THE GALLERY / REAL MOMENTS"
        title="The night ends."
        accent="The stories don’t."
        description="The bars, the people, the little details. A look inside the Dr. Drunk world, one very good time after another."
        image="/brand/party.webp"
        alt="Guests and performers together on a lively dancefloor"
        href="#archive"
      />
      <EventArchive />
    </main>
  );
}
