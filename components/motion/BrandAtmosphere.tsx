"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { BrandIllustration } from "@/components/sections/BrandIllustration";

export function BrandAtmosphere() {
  const [paused, setPaused] = useState(false);
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sync = () => layer.current?.classList.toggle("is-dormant", document.hidden);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);
  return <>
    <div className={`brand-atmosphere ${paused ? "is-paused" : ""}`} ref={layer} aria-hidden="true">
      <div className="deck-pattern" />
      <div className="floating-motif motif-coupe"><BrandIllustration kind="cocktail" /></div>
      <div className="floating-motif motif-citrus"><BrandIllustration kind="citrus" /></div>
      <div className="floating-motif motif-shaker"><BrandIllustration kind="shaker" /></div>
      <div className="floating-motif motif-story"><BrandIllustration kind="story" /></div>
      <span className="floating-bubble bubble-one" /><span className="floating-bubble bubble-two" />
    </div>
    <button className="atmosphere-control" aria-label={paused ? "Play decorative background motion" : "Pause decorative background motion"} aria-pressed={paused} onClick={() => setPaused(!paused)}>
      {paused ? <Play size={13} /> : <Pause size={13} />}<span>Ambient motion</span>
    </button>
  </>;
}
