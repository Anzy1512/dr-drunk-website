import { ArrowUpRight, ArrowUp } from "lucide-react";
import { CONTACT_EMAIL, INSTAGRAM, TASTING_LINK } from "@/lib/brand-content";
import { SocialLinks } from "./SocialLinks";
export function Footer() {
  return (
    <footer id="appointment" className="appointment">
      <SocialLinks />
      <div className="appointment-main">
        <div>
          <p className="eyebrow">06 / Your next very good night starts here</p>
          <h2>
            Need an
            <br />
            <span className="script">appointment?</span>
          </h2>
        </div>
        <div className="appointment-copy">
          <p>
            Tell us about the occasion.
            <br />
            We’ll get elaborate about the flavours.
          </p>
          <a className="button" href={TASTING_LINK}>
            Book a cocktail tasting <ArrowUpRight size={20} />
          </a>
          <p className="contact-note">Start the conversation by email.</p>
        </div>
      </div>
      <div className="footer-contacts">
        <a className="email-link" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
          <ArrowUpRight size={18} />
        </a>
        <div>
          <a href="tel:+66626439728">+66 6-2643-9728</a>
          <a href="tel:+66924172299">+66 9-2417-2299</a>
        </div>
        <a
          className="instagram-link"
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
        >
          Instagram / @docdrunk
          <ArrowUpRight size={18} />
        </a>
      </div>
      <p className="other-services">
        THE WHOLE BAR, TAKEN CARE OF
        <span>
          Alcohol supply · Glassware rentals · Room drops · Hangover kits
        </span>
      </p>
      <div className="footer-bottom">
        <a href="/" aria-label="Dr. Drunk home">
          <span className="footer-wordmark">DR. DRUNK<span>YOUR PARTY PRACTITIONERS</span></span>
        </a>
        <p>Your total bar solution.</p>
        <a href="/" className="back-top">
          Back to the first sip
          <ArrowUp size={16} />
        </a>
      </div>
      <nav className="footer-directory" aria-label="Explore the website">{[["Cocktails","/cocktails"],["Weddings","/weddings"],["Experiences","/experiences"],["Gallery","/gallery"],["About","/about"],["Contact","/contact"],["FAQ","/faq"]].map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
      <p className="footer-fineprint">© {new Date().getFullYear()} Dr. Drunk. Crafted for your kind of celebration.</p>
    </footer>
  );
}
