import { ArrowDown } from "lucide-react";
import { NightEmblem } from "@/components/sections/NightEmblem";
export function PageIntro({
  chapter,
  title,
  accent,
  description,
  image,
  alt,
  href,
}: {
  chapter: string;
  title: string;
  accent: string;
  description: string;
  image?: string;
  alt?: string;
  href: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-intro-copy">
        <p className="eyebrow">{chapter}</p>
        <h1>
          {title}
          <span className="script">{accent}</span>
        </h1>
        <p>{description}</p>
        <a className="text-link" href={href}>
          Explore the details
          <ArrowDown size={18} />
        </a>
      </div>
      {image ? <figure>
        <img
          src={image}
          alt={alt}
          width="1000"
          height="1400"
          fetchPriority="high"
        />
      </figure> : <NightEmblem />}
    </section>
  );
}
