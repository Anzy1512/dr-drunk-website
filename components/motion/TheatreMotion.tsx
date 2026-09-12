"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TheatreMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    void import("@/lib/motion-score").then(({ brandScore }) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const score = brandScore();
      const ambient = score.sheet("Atmosphere");
      const object = ambient.object("Direction", { drift: 0, glow: 0.15 });
      const unsubscribe = object.onValuesChange(({ drift, glow }) => {
        document.documentElement.style.setProperty("--score-drift", `${drift * 14}px`);
        document.documentElement.style.setProperty("--score-glow", `${glow}`);
      });
      const sync = () => {
        const paused = document.querySelector('.atmosphere-control[aria-pressed="true"]');
        if (paused || document.hidden || media.matches) ambient.sequence.pause();
        else if (!playing) { playing = true; void ambient.sequence.play({ iterationCount: Infinity }).finally(() => { playing = false; }); }
        if (paused || document.hidden || media.matches) playing = false;
      };
      let playing = false;
      const button = document.querySelector(".atmosphere-control");
      const observer = new MutationObserver(sync);
      if (button) observer.observe(button, { attributes: true, attributeFilter: ["aria-pressed"] });
      document.addEventListener("visibilitychange", sync); media.addEventListener("change", sync); sync();
      const reveals = [...document.querySelectorAll<HTMLElement>(".depth-shell, .flavour-console, .gimmick-stage, .serving-object-grid article")].map((element, index) => {
        const instance = score.sheet("Reveal", `${location.pathname}-${index}`);
        const direction = instance.object("Direction", { rise: 0, tilt: 0, opacity: 1 });
        const unbind = direction.onValuesChange(({ rise, tilt, opacity }) => {
          if (media.matches) return;
          element.style.setProperty("--reveal-rise", `${rise}px`);
          element.style.setProperty("--reveal-tilt", `${tilt}deg`);
          element.style.setProperty("--reveal-opacity", `${opacity}`);
        });
        const trigger = ScrollTrigger.create({ trigger: element, start: "top 98%", end: "top 65%", onUpdate: self => { instance.sequence.position = self.progress; } });
        instance.sequence.position = trigger.progress;
        return () => { trigger.kill(); unbind(); instance.detachObject("Direction"); };
      });
      document.documentElement.dataset.theatre = "ready";
      cleanup = () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); media.removeEventListener("change", sync); ambient.sequence.pause(); unsubscribe(); ambient.detachObject("Direction"); reveals.forEach(fn => fn()); delete document.documentElement.dataset.theatre; };
    }).catch(() => { /* Keep the readable CSS/GSAP experience if the optional score cannot load. */ });
    return () => { disposed = true; cleanup(); };
  }, []);
  return null;
}
