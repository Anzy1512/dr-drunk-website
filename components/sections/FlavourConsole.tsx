"use client";
import { useState } from "react";
import { ArrowDown, Martini } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { catalogue } from "@/lib/catalogue";
export function FlavourConsole() {
  const [category, setCategory] = useState(catalogue[0].id);
  const group = catalogue.find(item => item.id === category)!;
  return <section className="flavour-console section-pad" aria-labelledby="flavour-console-title">
    <div className="section-heading"><div><p className="eyebrow">A STARTING POINT FOR YOUR MENU</p><h2 id="flavour-console-title">Pick a mood.<br /><span className="script">Find your kind of curious.</span></h2></div><p>Familiar favourites or something unexpected?<br />Explore the collection, one mood at a time.</p></div>
    <Tabs value={category} onValueChange={setCategory}><TabsList className="flavour-moods" aria-label="Explore cocktail moods">{catalogue.map(item => <TabsTrigger key={item.id} value={item.id}>{item.name}</TabsTrigger>)}</TabsList>
      {catalogue.map(item => <TabsContent value={item.id} key={item.id}><div className="flavour-fan">{item.drinks.slice(0, 3).map((drink, index) => <article className="flavour-card" key={`${category}-${drink.name}`}><div><span>0{index + 1}</span><Martini size={28} aria-hidden="true" /></div><p className="eyebrow">{item.name}</p><h3>{drink.name}</h3><p>{drink.ingredients}</p></article>)}</div></TabsContent>)}
    </Tabs><a className="text-link" href="#collection" onClick={() => window.dispatchEvent(new CustomEvent("dr-drunk:category", { detail: category }))}>Explore {group.name} <ArrowDown size={18} /></a>
  </section>;
}
