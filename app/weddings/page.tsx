import { PageIntro } from "@/components/layout/PageIntro";
import { Story } from "@/components/sections/Story";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Wedding Stories",
  "Your love story told through bespoke cocktails, memory-lane menus and themed bar experiences.",
  "/weddings",
);
const details = [
  [
    "Moodboard driven",
    "Your Haldi, Sangeet, Wedding and After Party can each have a different mood. Cocktails, glassware, bar décor, props and bartender costumes follow your theme.",
  ],
  [
    "Memory-lane menus",
    "The First Date. The First Trip. The “I Love You”. The Proposal. Each cocktail can represent a moment in your relationship.",
  ],
  [
    "A timeline through drinks",
    "From How We Met and First Vacation Together to Moving In and The Proposal, let the bar follow the chapters of your journey.",
  ],
  [
    "Let guests discover the story",
    "A QR code on the menu can reveal the story behind a drink. A short note might share “Inspired by our first trip to Bali” or “The drink we had on our first date.”",
  ],
  [
    "Your theme, our presentation",
    "For an Arabian theme: Aladdin lamps, chalices and brass goblets. For a tropical celebration: tiki mugs, coconuts and pineapples.",
  ],
  [
    "Tiny details that are yours",
    "Coasters with your story, stirrers with your initials, cocktail napkins with inside jokes, and ice cubes with edible flowers or logos.",
  ],
];
export default function Weddings() {
  return (
    <main id="main">
      <PageIntro
        chapter="WEDDINGS / STORYTELLING THROUGH COCKTAILS"
        title="A celebration"
        accent="that tastes like you."
        description="Your wedding should feel like walking into your own love story. Let every drink tell a little part of it."
        image="/brand/couple.webp"
        alt="A couple sharing a cocktail celebration"
        href="#story"
      />
      <Story />
      <section className="detail-editorial section-pad" id="wedding-details">
        <div className="section-heading">
          <h2>
            Every chapter.
            <br />
            <span className="script">Every little detail.</span>
          </h2>
          <a
            className="text-link"
            href="/guides/cocktail-storytelling.pdf"
            target="_blank"
          >
            Read the storytelling guide
            <ArrowUpRight size={18} />
          </a>
        </div>
        {details.map(([title, text], i) => (
          <article className="detail-row" key={title}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
        <div className="creative-note">
          <h3>A few conversation starters.</h3>
          <p>
            Perfume cocktail bar · DIY garnish station · Smoke bubble cocktails
            · Polaroid coaster printing · Couple trivia drink menu
          </p>
          <p className="script">
            Nothing about your story is generic. Your bar shouldn’t be either.
          </p>
        </div>
      </section>
    </main>
  );
}
