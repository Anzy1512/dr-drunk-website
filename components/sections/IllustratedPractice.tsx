import { ArrowUpRight } from "lucide-react";
import { BrandIllustration, type IllustrationKind } from "./BrandIllustration";
const chapters: { kind: IllustrationKind; title: string; accent: string; copy: string; href: string }[] = [
  { kind: "cocktail", title: "A little science.", accent: "A lot of spirit.", copy: "Discover unexpected flavours, familiar favourites and a menu made around you.", href: "/cocktails" },
  { kind: "story", title: "Your memories.", accent: "Our inspiration.", copy: "Turn a first date, a favourite place or an inside joke into your wedding bar story.", href: "/weddings" },
  { kind: "shaker", title: "Shake things up.", accent: "Make a night of it.", copy: "The glassware, the flair and the tiny details. Your whole bar, taken care of.", href: "/experiences" },
];
export function IllustratedPractice() {
  return <section className="illustrated-practice section-pad" aria-labelledby="illustrated-title">
    <div className="illustrated-heading"><p className="eyebrow">The Dr. Drunk formula</p><h2 id="illustrated-title">Good times, <span className="script">by design.</span></h2></div>
    <div className="illustration-cards">{chapters.map((chapter) => <a href={chapter.href} key={chapter.kind} className="illustration-card glass-tilt">
      <div className="illustration-card-top"><span>THE PRACTICE</span><ArrowUpRight size={20} /></div>
      <BrandIllustration kind={chapter.kind} />
      <h3>{chapter.title}<span className="script">{chapter.accent}</span></h3><p>{chapter.copy}</p>
    </a>)}</div>
  </section>;
}
