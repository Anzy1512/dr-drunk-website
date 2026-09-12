"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pause, Play, ArrowDown, Rotate3d, Sparkles, Search } from "lucide-react";
import type { Experience } from "@/components/three/createExperience";
const serves = [
  {
    name: "Chai Whisky",
    color: "#d8770d",
    ingredients: "Whisky · Chai syrup",
    character: "Warm, spiced, and wonderfully familiar.",
    notes: ["Whisky", "Chai"],
  },
  {
    name: "Cgi Cgi",
    color: "#99b844",
    ingredients: "Gin · Cucumber · Lime",
    character: "A little fresh thinking for your glass.",
    notes: ["Gin", "Cucumber", "Lime"],
  },
  {
    name: "Guava Island",
    color: "#ea7b76",
    ingredients: "Rum · Pink guava · Coconut cream · Kaffir",
    character: "A tropical turn for your next celebration.",
    notes: ["Rum", "Guava", "Coconut", "Kaffir"],
  },
];
export function InteractiveLab() {
  const [selected, setSelected] = useState(0),
    [ready, setReady] = useState(false),
    [paused, setPaused] = useState(false);
  const [view, setView] = useState(0);
  const host = useRef<HTMLDivElement>(null),
    frame = useRef<HTMLDivElement>(null),
    engine = useRef<Experience | null>(null),
    selectedRef = useRef(0),
    pausedRef = useRef(false);
  useEffect(() => {
    let alive = true, loading = false;
    const media = window.matchMedia(
      "(min-width:760px) and (prefers-reduced-motion:no-preference)",
    );
    const device = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const start = async () => {
      if (
        !media.matches ||
        device.connection?.saveData ||
        (device.deviceMemory && device.deviceMemory <= 2) ||
        engine.current || loading
      )
        return;
      loading = true;
      try {
        const sceneModule = await import("@/components/three/createExperience");
        if (alive && media.matches && host.current && frame.current && !engine.current) {
          engine.current = sceneModule.createExperience(
            host.current,
            frame.current,
            () => setReady(true),
            () => setReady(false),
          );
          engine.current.setPaused(pausedRef.current);
          engine.current.setRecipe(serves[selectedRef.current].color);
        }
      } catch (error) {
        console.warn("Scene fallback:", error);
        setReady(false);
      } finally {
        loading = false;
      }
    };
    void start();
    const change = () => {
      if (!media.matches) {
        engine.current?.dispose();
        engine.current = null;
        setReady(false);
      } else void start();
    };
    media.addEventListener("change", change);
    return () => {
      alive = false;
      media.removeEventListener("change", change);
      engine.current?.dispose();
      engine.current = null;
    };
  }, []);
  function select(index: number) {
    setSelected(index);
    selectedRef.current = index;
    engine.current?.setRecipe(serves[index].color);
    engine.current?.swirl();
  }
  const serve = serves[selected];
  return (
    <section className="interactive-lab" ref={frame} style={{ "--serve-color": serve.color } as CSSProperties}>
      <div className="lab-intro">
        <p className="eyebrow">THE COCKTAIL LAB / DR. DRUNK</p>
        <h1>
          Good taste.
          <br />
          <span className="script">Wild imagination.</span>
        </h1>
        <p>
          From a familiar favourite to a flavour you’ve never imagined. Start
          with a little inspiration.
        </p>
        <div
          className="serve-selector"
          role="group"
          aria-label="Featured cocktail inspiration"
        >
          {serves.map((s, i) => (
            <button
              key={s.name}
              onClick={() => select(i)}
              aria-pressed={i === selected}
            >
              <span style={{ background: s.color }} />
              {s.name}
            </button>
          ))}
        </div>
        <div className="serve-description" aria-live="polite" key={serve.name}>
          <h2>{serve.name}</h2>
          <p>{serve.ingredients}</p>
          <p className="script">{serve.character}</p>
        </div>
        <div className="ingredient-trail"><p className="eyebrow">FOLLOW A FLAVOUR</p><div>{serve.notes.map(note => <a key={note} href="#collection" onClick={() => window.dispatchEvent(new CustomEvent("dr-drunk:ingredient", { detail: note }))}><Search size={14} />{note}</a>)}</div><p>Find more drinks with an ingredient you love.</p></div>
        <a href="#collection" className="text-link">
          Explore all 100 menu entries
          <ArrowDown size={18} />
        </a>
      </div>
      <div className={`lab-installation ${ready ? "is-ready" : ""}`}>
        <div className="lab-orbit" aria-hidden="true"><span>SPIRIT</span><span>CHARACTER</span><span>A LITTLE MISCHIEF</span></div>
        <div className="installation-backdrop">
          <img
            className="scene-fallback"
            src="/brand/cocktail-toast.webp"
            alt="Two Dr. Drunk cocktails in coupe glasses"
            width="900"
            height="1350"
          />
        </div>
        <div className="scene-canvas" ref={host} />
        <div className="lab-specimen" aria-hidden="true"><span>THE DOCTOR IS IN</span><span>{serve.name}</span></div>
        {ready && <div className="scene-controls"><div role="group" aria-label="Cocktail viewpoints">{["The glass", "The garnish", "The twist"].map((label, index) => <button key={label} aria-pressed={view === index} onClick={() => { setView(index); engine.current?.setView(index / 2); }}><Rotate3d size={16} />{label}</button>)}</div><button className="swirl-button" disabled={paused} onClick={() => engine.current?.swirl()}><Sparkles size={18} />Give it a swirl</button></div>}
        <div className="lab-caption">
          <span>{ready ? "MOVE YOUR POINTER. EXPLORE THE POUR." : "AN EXPLORATION OF FLAVOUR & FORM"}</span>
          {ready && (
            <button
              className="motion-button"
              aria-label={paused ? "Play scene motion" : "Pause scene motion"}
              aria-pressed={paused}
              onClick={() => {
                setPaused(!paused);
                pausedRef.current = !paused;
                engine.current?.setPaused(!paused);
              }}
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
