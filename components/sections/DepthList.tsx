"use client";
import { useRef, type PointerEvent } from "react";
import { Sparkles, Heart, Martini, Music2, Flower2, WandSparkles, GlassWater, Users, Plus } from "lucide-react";
const icons = [Sparkles, Heart, Martini, Music2, Flower2, WandSparkles, GlassWater, Users];
export function DepthList({ items, label }: { items: string[][]; label: string }) {
  const active = useRef<HTMLElement | null>(null);
  function reset() { active.current?.style.setProperty("--tilt-x", "0deg"); active.current?.style.setProperty("--tilt-y", "0deg"); active.current = null; }
  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = (event.target as HTMLElement).closest<HTMLElement>(".depth-card");
    if (!card) { reset(); return; }
    if (card !== active.current) { reset(); active.current = card; }
    const box = card.getBoundingClientRect(), x = (event.clientX - box.left) / box.width, y = (event.clientY - box.top) / box.height;
    card.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`); card.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
    card.style.setProperty("--shine-x", `${x * 100}%`); card.style.setProperty("--shine-y", `${y * 100}%`);
  }
  return <div className="depth-grid" aria-label={label} onPointerMove={move} onPointerLeave={reset}>
    {items.map(([title, text], index) => { const Icon = icons[index % icons.length]; return <div className="depth-shell" key={title}>
      <details className="depth-card" open>
        <summary><Icon className="depth-icon" size={30} aria-hidden="true" /><h3>{title}</h3><Plus className="depth-toggle" size={20} aria-hidden="true" /></summary>
        <div className="depth-body"><p>{text}</p></div>
      </details>
    </div>; })}
  </div>;
}
