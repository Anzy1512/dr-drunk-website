"use client";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/brand-content";
export function GimmickSelector({ items }: { items: string[] }) {
  const [selected, setSelected] = useState(0);
  return <div className="gimmick-console"><div className="gimmick-stage" key={selected}>
    <span className="eyebrow">A LITTLE EXTRA MISCHIEF</span><Sparkles size={56} aria-hidden="true" />
    <span className="gimmick-count">{String(selected + 1).padStart(2, "0")} / {items.length}</span>
    <h3>{items[selected]}</h3><a className="text-link" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Let’s talk about ${items[selected]}`)}`}>Explore this for our party <ArrowUpRight size={18} /></a>
  </div><div className="gimmick-options" role="group" aria-label="Explore entertainment ideas">{items.map((item, index) => <button key={item} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item}</button>)}</div><span className="sr-only" role="status">Selected: {items[selected]}</span></div>;
}
