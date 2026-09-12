import { InteractiveLab } from "@/components/sections/InteractiveLab";
import { Catalogue } from "@/components/sections/Catalogue";
import { FlavourConsole } from "@/components/sections/FlavourConsole";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "The Cocktail Lab",
  "Explore the 100-entry Dr. Drunk cocktail collection, search by flavour and spirit, and create your bespoke menu.",
  "/cocktails",
);
export default function Cocktails() {
  return (
    <main id="main">
      <InteractiveLab />
      <FlavourConsole />
      <Catalogue />
    </main>
  );
}
