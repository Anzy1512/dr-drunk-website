import { PageIntro } from "@/components/layout/PageIntro";
import { People } from "@/components/sections/People";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "The Practice",
  "Meet Dr. Drunk: your party practitioners and customizable mixology team, bringing craft, flair and hospitality to your bar.",
  "/about",
);
export default function About() {
  return (
    <main id="main">
      <PageIntro
        chapter="THE PRACTICE / WHO WE ARE"
        title="Your bar jinn."
        accent="At your service."
        description="We’re a customizable mixologist service and total bar solution. Think fun, flavourful, Instagrammable cocktails, made for your occasion."
        image="/brand/team.webp"
        alt="The Dr. Drunk team at a decorated bar"
        href="#our-practice"
      />
      <section id="our-practice" className="about-statement section-pad">
        <p className="eyebrow">OUR UNSTOPPABLE TEAM</p>
        <h2>
          Craft in the glass.
          <br />
          <span className="script">Heart in the service.</span>
        </h2>
        <div>
          <p>
            Quality, speed and creativity are our doctors’ oath. We specialize
            in mixology, flair and crowd energy, with a warm smile and cold
            drinks.
          </p>
          <p>
            Not servers, but craftsmen. Not emcees, but hypemen. Not dancers,
            but groovemen. Your Doctor barmen.
          </p>
        </div>
      </section>
      <People />
      <section className="source-library section-pad">
        <p className="eyebrow">EXPLORE THE DR. DRUNK WORLD</p>
        <h2>The full story.</h2>
        <div>
          {[
            [
              "Company profile",
              "/guides/company-profile.pdf",
              "20 pages · Team, services and previous collaborations",
            ],
            [
              "Cocktail collection",
              "/guides/cocktail-collection.pdf",
              "14 pages · The original cocktail menu",
            ],
            [
              "Storytelling through cocktails",
              "/guides/cocktail-storytelling.pdf",
              "11 pages · Your wedding story, served",
            ],
            [
              "Gimmicks, entertainment & flair",
              "/guides/concepts-flair.pdf",
              "6 pages · Props, glassware, costumes and reference films",
            ],
          ].map(([title, url, description]) => (
            <a href={url} target="_blank" key={url}>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight size={24} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
