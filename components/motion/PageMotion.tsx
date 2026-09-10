"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
export function PageMotion() {
  const path = usePathname();
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });
      const text = document.querySelectorAll(".page-intro-copy > *, .lab-intro > *");
      const figures = document.querySelectorAll(".page-intro figure");
      if (text.length) timeline.from(text, {
          opacity: 0,
          y: 24,
          stagger: 0.09,
        });
      if (figures.length) timeline.from(
          figures,
          { opacity: 0, scale: 0.96, rotation: 2 },
          0.15,
        );
      return () => {
        timeline.kill();
      };
    });
    return () => media.revert();
  }, [path]);
  return null;
}
