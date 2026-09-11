import { Opening } from "@/components/sections/Opening";
import { CocktailLab } from "@/components/sections/CocktailLab";
import { Story } from "@/components/sections/Story";
import { GoodTimes } from "@/components/sections/GoodTimes";
import { People } from "@/components/sections/People";
import { Reveals } from "@/components/motion/Reveals";
import { IllustratedPractice } from "@/components/sections/IllustratedPractice";
import { PartyTape } from "@/components/sections/PartyTape";
import { FAQ } from "@/components/sections/FAQ";
import { PartyProcess } from "@/components/sections/PartyProcess";
export default function Home() {
  return (
    <>
      <main id="main">
        <Opening />
        <PartyTape />
        <IllustratedPractice />
        <CocktailLab />
        <a className="chapter-link" href="/cocktails">
          Explore the complete cocktail collection <span>→</span>
        </a>
        <Story />
        <a className="chapter-link dark-link" href="/weddings">
          Design your wedding bar story <span>→</span>
        </a>
        <GoodTimes />
        <a className="chapter-link" href="/gallery">
          Step into the complete event gallery <span>→</span>
        </a>
        <People />
        <PartyProcess />
        <a className="chapter-link" href="/about">
          Meet the practice <span>→</span>
        </a>
        <FAQ compact />
      </main>
      <Reveals />
    </>
  );
}
