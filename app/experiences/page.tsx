import { PageIntro } from "@/components/layout/PageIntro";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/site";
import { ServingObjects } from "@/components/sections/ServingObjects";
import { DepthList } from "@/components/sections/DepthList";
import { GimmickSelector } from "@/components/sections/GimmickSelector";
export const metadata = pageMetadata(
  "Bar Experiences",
  "Custom bar setups, mixology, flair, games, props, tasting and total bar services by Dr. Drunk.",
  "/experiences",
);
const services = [
  [
    "Cocktail development",
    "We help choose cocktails for your occasion, meeting your specifications with selections shaped by work with local and international clients.",
  ],
  [
    "Customizable bar menus",
    "Funny names, inside jokes and a menu that feels like your celebration. The profile’s examples include #Tatiwithatwist, #CgiCgi and #Patelinmypants.",
  ],
  [
    "A tailored bar setup",
    "The bar is a reflection of you: its mood, glassware, decorations and service can be coordinated around your theme.",
  ],
  [
    "Personalized service",
    "Beer pong, stamped coconuts and fruits, cocktails in props and glassware of your choice, games and creative serving ideas.",
  ],
  [
    "Flair and entertainment",
    "Mixology, flair and crowd energy, with bartenders, costumes and entertainment that match the occasion.",
  ],
  [
    "Hospitality throughout",
    "From changes to the plan to the little details on the day, the team stays with you through the scenarios that make a celebration personal.",
  ],
  [
    "A cocktail tasting",
    "Book an appointment or video call and get elaborate about flavours. Your tasting shapes the selections for your event.",
  ],
  [
    "The supporting essentials",
    "Alcohol supply, hangover kits, glassware rentals and room drops complete the total bar solution.",
  ],
];
const gimmicks = [
  "Syringe shots",
  "Alcohol ammunition",
  "Be a bartender",
  "Beer pong",
  "Buckets",
  "Smoke machine",
  "IV alcohol drip props",
  "DD Awards",
  "Creative ways to drink",
  "Perfume cocktail bar",
  "DIY garnish station",
  "Smoke bubble cocktails",
  "Polaroid coaster printing",
  "Couple trivia drink menu",
];
export default function Experiences() {
  return (
    <main id="main">
      <PageIntro
        chapter="EXPERIENCES / YOUR TOTAL BAR SOLUTION"
        title="Raise the bar."
        accent="Then make it yours."
        description="The drinks are only the beginning. We bring together the bar, the service and the moments that make your celebration feel like you."
        image="/brand/bar.webp"
        alt="Golden lighting and a theatrical event bar installation"
        href="#services"
      />
      <section id="services" className="detail-editorial section-pad">
        <div className="section-heading">
          <h2>
            One bar.
            <br />A world of possibilities.
          </h2>
          <a
            href="/guides/company-profile.pdf"
            target="_blank"
            className="text-link"
          >
            Explore our company profile
            <ArrowUpRight size={18} />
          </a>
        </div>
        <DepthList items={services} label="Bar services" />
      </section>
      <ServingObjects />
      <section className="gimmicks-section section-pad">
        <div>
          <p className="eyebrow">GIMMICKS, ENTERTAINMENT & FLAIR</p>
          <h2>
            A prescription
            <br />
            <span className="script">for mischief.</span>
          </h2>
          <p>
            Serving ideas, props and playful moments from the Dr. Drunk
            repertoire. We’ll choose what suits your occasion together.
          </p>
          <a
            href="/guides/concepts-flair.pdf"
            target="_blank"
            className="text-link"
          >
            See the concept & flair guide
            <ArrowUpRight size={18} />
          </a>
        </div>
        <GimmickSelector items={gimmicks} />
      </section>
    </main>
  );
}
