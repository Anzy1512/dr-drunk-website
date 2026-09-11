import { PageIntro } from "@/components/layout/PageIntro";
import { pageMetadata } from "@/lib/site";
import { FAQ } from "@/components/sections/FAQ";
export const metadata = pageMetadata(
  "Book a Tasting",
  "Plan your Dr. Drunk bar experience. Book a cocktail tasting or video call and tell us about your occasion.",
  "/contact",
);
export default function Contact() {
  return (
    <main id="main">
      <PageIntro
        chapter="CONTACT / LET’S GET ELABORATE ABOUT FLAVOURS"
        title="Your occasion."
        accent="Our next experiment."
        description="A wedding, a celebration, or an idea that needs a little Dr. Drunk energy. Tell us what you’re imagining and let’s shape it over a tasting."
        image="/brand/cocktail-toast.webp"
        alt="Two cocktails raised in a toast"
        href="#appointment"
      />
      <section className="contact-preparation section-pad">
        <p className="eyebrow">A LITTLE SOMETHING TO GET US STARTED</p>
        <h2>
          Bring your ideas.
          <br />
          <span className="script">We’ll bring the possibilities.</span>
        </h2>
        <div>
          <p>Your occasion & event date</p>
          <p>Location & approximate guest count</p>
          <p>Favourite flavours & spirits</p>
          <p>Your moodboard, theme or story</p>
        </div>
        <p>
          A video call works too. The first conversation is where your bar
          starts becoming yours.
        </p>
      </section>
      <FAQ />
    </main>
  );
}
