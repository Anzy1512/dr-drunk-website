import { Opening } from "@/components/sections/Opening";
import { CocktailLab } from "@/components/sections/CocktailLab";
import { Story } from "@/components/sections/Story";
import { GoodTimes } from "@/components/sections/GoodTimes";
import { People } from "@/components/sections/People";
import { Reveals } from "@/components/motion/Reveals";
export default function Home() {
  return (
    <>
      <main id="main">
        <Opening />
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
        <a className="chapter-link" href="/about">
          Meet the practice <span>→</span>
        </a>
      </main>
      <Reveals />
    </>
  );
}
