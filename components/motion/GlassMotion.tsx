"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
export function GlassMotion() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cards = [...document.querySelectorAll<HTMLElement>(".glass-tilt, .page-intro figure")];
      const cleanups = cards.map((card) => {
        const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power3.out" });
        const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power3.out" });
        const move = (event: PointerEvent) => {
          const box = card.getBoundingClientRect();
          const x = (event.clientX - box.left) / box.width, y = (event.clientY - box.top) / box.height;
          rotateX((0.5 - y) * 5); rotateY((x - 0.5) * 5);
          card.style.setProperty("--shine-x", `${x * 100}%`);
          card.style.setProperty("--shine-y", `${y * 100}%`);
        };
        const reset = () => { rotateX(0); rotateY(0); };
        card.addEventListener("pointermove", move); card.addEventListener("pointerleave", reset);
        return () => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", reset); rotateX.tween.kill(); rotateY.tween.kill(); gsap.set(card, { clearProps: "rotationX,rotationY" }); };
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-illustrated"); observer.unobserve(entry.target); }
    }), { threshold: 0.2 });
    document.querySelectorAll(".illustration-card").forEach((card) => observer.observe(card));
    return () => { observer.disconnect(); media.revert(); };
  }, []);
  return null;
}
