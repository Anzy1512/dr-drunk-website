"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function ScrollChoreography() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(".reading-progress", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.2 } });
      document.querySelectorAll<HTMLElement>(".party-tape-track").forEach((track, i) => gsap.fromTo(track, { xPercent: i % 2 ? -16 : 0 }, { xPercent: i % 2 ? 0 : -16, ease: "none", scrollTrigger: { trigger: track.parentElement, start: "top bottom", end: "bottom top", scrub: 0.8 } }));
      document.querySelectorAll<HTMLElement>(".section-heading h2, .illustrated-heading h2, .archive-heading h2").forEach((heading) => gsap.from(heading, { y: 35, rotation: -1.5, opacity: 0.35, ease: "power2.out", scrollTrigger: { trigger: heading, start: "top 95%", end: "top 70%", scrub: 0.65 } }));
      if (document.querySelector(".illustration-cards")) gsap.from(".illustration-card", { y: 75, rotation: (i) => (i - 1) * 6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".illustration-cards", start: "top 95%", end: "top 48%", scrub: 0.8 } });
      document.querySelectorAll<HTMLElement>(".event-photo img").forEach((image) => gsap.fromTo(image, { yPercent: -3, scale: 1.08 }, { yPercent: 3, scale: 1.02, ease: "none", scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "bottom top", scrub: 0.65 } }));
    });
    const refresh = () => ScrollTrigger.refresh();
    document.addEventListener("toggle", refresh, true);
    return () => { document.removeEventListener("toggle", refresh, true); media.revert(); };
  }, []);
  return <div className="reading-progress" aria-hidden="true" />;
}
