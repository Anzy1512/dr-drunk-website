import { faqs } from "@/lib/faqs";
export function FAQ({ compact = false }: { compact?: boolean }) {
  return <section className="faq-section section-pad" aria-labelledby="faq-heading">
    <div className="section-heading"><div><p className="eyebrow">A little clarity before the party</p><h2 id="faq-heading">Good questions.<br /><span className="script">Straight answers.</span></h2></div>{compact && <a href="/faq" className="text-link">All your questions <span aria-hidden="true">↗</span></a>}</div>
    <div className="faq-list">{(compact ? faqs.slice(0, 4) : faqs).map((faq, i) => <details key={faq.question}><summary><span className="faq-number">0{i + 1}</span>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><div className="faq-answer"><p>{faq.answer}</p><a className="text-link" href={faq.href}>{faq.link} <span aria-hidden="true">↗</span></a></div></details>)}</div>
  </section>;
}
