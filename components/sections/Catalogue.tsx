"use client";
import { useEffect, useMemo, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { catalogue, catalogueCount } from "@/lib/catalogue";
import { TASTING_LINK } from "@/lib/brand-content";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
export function Catalogue() {
  const [query, setQuery] = useState(""),
    [category, setCategory] = useState("all");
  useEffect(() => {
    const choose = (event: Event) => { const note = (event as CustomEvent<unknown>).detail; if (typeof note === "string") { setQuery(note); setCategory("all"); } };
    const chooseCategory = (event: Event) => { const id = (event as CustomEvent<unknown>).detail; if (typeof id === "string" && catalogue.some(group => group.id === id)) { setQuery(""); setCategory(id); } };
    window.addEventListener("dr-drunk:ingredient", choose);
    window.addEventListener("dr-drunk:category", chooseCategory);
    return () => { window.removeEventListener("dr-drunk:ingredient", choose); window.removeEventListener("dr-drunk:category", chooseCategory); };
  }, []);
  const results = useMemo(
    () =>
      catalogue
        .filter((g) => category === "all" || g.id === category)
        .map((g) => ({
          ...g,
          drinks: g.drinks.filter((d) =>
            `${d.name} ${d.ingredients}`
              .toLowerCase()
              .includes(query.trim().toLowerCase()),
          ),
        }))
        .filter((g) => g.drinks.length),
    [query, category],
  );
  const count = results.reduce((sum, g) => sum + g.drinks.length, 0);
  return (
    <section className="catalogue section-pad" id="collection">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The Dr. Drunk collection</p>
          <h2>
            Pick your
            <br />
            <span className="script">kind of curious.</span>
          </h2>
        </div>
        <a
          href="/guides/cocktail-collection.pdf"
          target="_blank"
          className="text-link"
        >
          Open the original menu <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="catalogue-controls">
        <label className="search-field">
          <Search size={19} />
          <span className="sr-only">Search cocktails and ingredients</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="A flavour, a spirit, a favourite…"
            type="search"
          />
        </label>
        <div className="category-select">
          <span id="category-label">Category</span>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger aria-labelledby="category-label">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="catalogue-select-menu">
              <SelectItem value="all">All categories</SelectItem>
              {catalogue.map((g) => (
                <SelectItem key={g.id} value={g.id}>
                  {g.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p aria-live="polite">
          {count} of {catalogueCount} menu entries
        </p>
      </div>
      <div className="catalogue-results">
        {results.length ? (
          results.map((group) => (
            <section key={group.id} className="catalogue-group">
              <div>
                <p className="eyebrow">
                  {group.drinks.length} entries
                </p>
                <h3>{group.name}</h3>
                {group.id === "specialty" && (
                  <p className="catalogue-context">
                    Specialty concepts from the supplied collection. Confirm
                    current availability and suitability with the team.
                  </p>
                )}
              </div>
              <ul>
                {group.drinks.map((drink) => (
                  <li key={drink.id}>
                    <h4>{drink.name}</h4>
                    <p>{drink.ingredients}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))
        ) : (
          <div className="catalogue-empty">
            <h3>No cocktails found.</h3>
            <p>Try another ingredient or explore every category.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Show the collection
            </button>
          </div>
        )}
      </div>
      <div className="catalogue-end">
        <p>
          From the supplied cocktail collection. Names and descriptions are menu
          concepts; your selection is finalized together at the tasting.
        </p>
        <a href={TASTING_LINK} className="button">
          Create your own menu
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
