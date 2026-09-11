import { BrandIllustration } from "./BrandIllustration";
export function PartyProcess() {
  return <section className="party-process section-pad" aria-labelledby="process-title"><div className="section-heading"><div><p className="eyebrow">FROM FIRST HELLO TO FINAL POUR</p><h2 id="process-title">Your kind of party.<br /><span className="script">Made personal.</span></h2></div><div className="process-doodle"><BrandIllustration kind="citrus" /></div></div><div className="process-grid">{[
    ["01", "Tell us your story", "Share your occasion, theme, guest count and favourite flavours."],
    ["02", "Explore the possibilities", "Discuss the drinks and details over a tasting or video call."],
    ["03", "Make the bar yours", "Coordinate the menu, glassware, props and service with the team."],
  ].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><a href="/contact" className="text-link">Let’s get the conversation started <span aria-hidden="true">↗</span></a></section>;
}
