import { FAQ } from "@/components/sections/FAQ";
import { pageMetadata, SITE_URL } from "@/lib/site";
import { faqs } from "@/lib/faqs";
export const metadata = pageMetadata("Frequently Asked Questions", "Answers about Dr. Drunk cocktail menus, wedding storytelling, tastings, event planning and enquiries.", "/faq");
export default function FAQPage() {
  return <main id="main"><header className="utility-intro section-pad"><a className="eyebrow" href="/">HOME /</a><h1>Ahead of<br /><span className="script">the good times.</span></h1><p>Everything you need to start a conversation about your bar.</p></header><FAQ /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","@id":`${SITE_URL}/faq#questions`,mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))})}} /></main>;
}
