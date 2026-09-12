"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import type { Experience } from "@/components/three/createExperience";

export function Opening() {
  const opening = useRef<HTMLDivElement>(null),
    host = useRef<HTMLDivElement>(null),
    experience = useRef<Experience | null>(null),
    pausedRef = useRef(false);
  const [ready, setReady] = useState(false),
    [paused, setPaused] = useState(false);
  useEffect(() => {
    const node = host.current,
      root = opening.current;
    if (!node || !root) return;
    let cancelled = false, loading = false;
    const media = window.matchMedia(
      "(min-width: 760px) and (prefers-reduced-motion: no-preference)",
    );
    const device = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const supports = () =>
      media.matches &&
      !device.connection?.saveData &&
      !(device.deviceMemory && device.deviceMemory <= 2);
    const load = async () => {
      if (!supports() || cancelled || experience.current || loading) return;
      loading = true;
      try {
        const { createExperience } =
          await import("@/components/three/createExperience");
        if (cancelled || !supports() || experience.current) return;
        experience.current = createExperience(
          node,
          root,
          () => setReady(true),
          () => setReady(false),
        );
        experience.current.setPaused(pausedRef.current);
      } catch (error) {
        console.warn("Scene fallback:", error);
        setReady(false);
      } finally {
        loading = false;
      }
    };
    const change = () => {
      if (!supports()) {
        experience.current?.dispose();
        experience.current = null;
        setReady(false);
      } else void load();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void load();
      },
      { rootMargin: "100px" },
    );
    observer.observe(root);
    media.addEventListener("change", change);
    return () => {
      cancelled = true;
      observer.disconnect();
      media.removeEventListener("change", change);
      experience.current?.dispose();
      experience.current = null;
    };
  }, []);
  function toggle() {
    const value = !paused;
    setPaused(value);
    pausedRef.current = value;
    experience.current?.setPaused(value);
  }
  return (
    <div className="opening" ref={opening}>
      <div className={`installation-track ${ready ? "is-ready" : ""}`}>
        <div className="installation">
          <div className="installation-backdrop">
            <img
              className="scene-fallback"
              src="/brand/cocktail-toast.webp"
              alt="Amber and clear cocktails served in coupe glasses"
              width="900"
              height="1350"
              fetchPriority="high"
            />
          </div>
          <div className="scene-canvas" ref={host} />
          <div className="stage-topline">
            <span className="good-times-badge"><i aria-hidden="true">✳</i> Est. good times</span>
          </div>
          <div className="stage-bottomline">
            <span className="script">Crafted for your kind of night.</span>
            {ready && (
              <button
                className="motion-button"
                onClick={toggle}
                aria-label={paused ? "Play scene motion" : "Pause scene motion"}
                aria-pressed={paused}
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
            )}
          </div>
          <div className="specimen-label">
            SPIRIT. SCIENCE. A LITTLE MISCHIEF.
          </div>
          <div className="good-times-stamp" aria-hidden="true"><span>GOOD TIMES</span><strong>Rx</strong><span>PRESCRIBED</span></div>
        </div>
      </div>
      <section className="arrival" aria-labelledby="arrival-title">
        <div className="hero-copy">
          <p className="eyebrow">
            Bespoke cocktails. Unforgettable celebrations.
          </p>
          <h1 id="arrival-title">
            Your party
            <br />
            <span>practitioners.</span>
          </h1>
          <p className="script hero-script">
            A little science. A lot of spirit.
          </p>
          <p className="hero-description">
            Cocktails with character. A bar that feels like you.
            <br className="desktop-break" /> We bring the craft, the flair, and
            the good times.
          </p>
          <a className="button" href="#cocktails">
            Enter the cocktail lab <ArrowUpRight size={20} />
          </a>
          <a href="#practice" className="scroll-note">
            <ArrowDown size={16} /> Scroll for your prescription
          </a>
          <div className="hero-flavour-note"><span>100+</span><p>Non-classic cocktail options.<br /><strong>One menu that feels like you.</strong></p><span className="note-spark" aria-hidden="true">✳</span></div>
        </div>
        <p className="hero-edition">
          YOUR TOTAL BAR SOLUTION <span>THE FIRST SIP</span>
        </p>
      </section>
      <section
        id="practice"
        className="practice"
        aria-labelledby="practice-title"
      >
        <div className="practice-copy">
          <p className="eyebrow">The practice</p>
          <h2 id="practice-title">
            A bar?
            <br />
            More like an
            <br />
            <span className="script">experimental lab.</span>
          </h2>
          <p>
            We’re your bar jinn. A team of mixologists and flair bartenders
            turning your tastes, your theme, and your wild little ideas into a
            celebration that feels like you.
          </p>
          <div className="practice-services">
            <div>
              <span aria-hidden="true">✳</span>
              <p>Mixology with imagination</p>
            </div>
            <div>
              <span aria-hidden="true">✳</span>
              <p>A bar made for your occasion</p>
            </div>
            <div>
              <span aria-hidden="true">✳</span>
              <p>Flair, warmth & a very good time</p>
            </div>
          </div>
          <a className="text-link" href="#appointment">
            Meet us over a tasting <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
