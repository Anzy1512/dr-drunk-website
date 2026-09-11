"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import photos from "@/lib/gallery-data.json";
export function EventArchive() {
  const [selected, setSelected] = useState<number | null>(null);
  const [first, setFirst] = useState(0), [perView, setPerView] = useState(3);
  const rail = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const items = node.children;
        const step = (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
        setPerView(window.matchMedia("(max-width: 759px)").matches ? 1 : 3);
        setFirst(Math.round(node.scrollLeft / step));
      });
    };
    const resize = new ResizeObserver(measure); resize.observe(node);
    node.addEventListener("scroll", measure, { passive: true }); measure();
    return () => { resize.disconnect(); node.removeEventListener("scroll", measure); cancelAnimationFrame(frame); };
  }, []);
  function go(index: number) {
    const node = rail.current;
    if (!node) return;
    const item = node.children[Math.max(0, Math.min(index, photos.length - perView))] as HTMLElement;
    node.scrollTo({ left: item.offsetLeft - (node.children[0] as HTMLElement).offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  const photo = selected === null ? null : photos[selected];
  return (
    <section className="event-archive section-pad" id="archive">
      <div className="archive-heading">
        <div>
          <p className="eyebrow">The photo archive</p>
          <h2>All the good times.</h2>
        </div>
        <p>{photos.length} moments from the Dr. Drunk world.</p>
      </div>
      <div className="archive-carousel" role="region" aria-roledescription="carousel" aria-label="Dr. Drunk event photographs" onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); go(first + perView); }
        if (event.key === "ArrowLeft") { event.preventDefault(); go(first - perView); }
        if (event.key === "Home") { event.preventDefault(); go(0); }
        if (event.key === "End") { event.preventDefault(); go(photos.length - perView); }
      }}>
      <div className="archive-rail" ref={rail}>
        {photos.map((item, index) => (
          <div className="archive-slide" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${photos.length}`} key={item.src}>
          <button
            className="archive-item"
            onClick={(event) => { opener.current = event.currentTarget; setSelected(index); }}
            tabIndex={index >= first && index < first + perView ? 0 : -1}
            aria-label={`Open photo ${index + 1}: ${item.alt}`}
          >
            {selected === index ? <div className="archive-viewing" style={{ aspectRatio: `${item.width} / ${item.height}` }}>Viewing this moment</div> : <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
            />}
            <span>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Expand size={17} />
            </span>
          </button>
          <p className="slide-caption">{item.alt}</p>
          </div>
        ))}
      </div>
      <div className="carousel-toolbar"><p aria-live="polite" aria-atomic="true">{String(first + 1).padStart(2, "0")}{perView > 1 && `–${String(Math.min(first + perView, photos.length)).padStart(2, "0")}`} <span>/ {photos.length} moments</span></p><span className="carousel-hint">Swipe, drag the scrollbar, or use the arrows</span><div><button type="button" onClick={() => go(first - perView)} disabled={first === 0} aria-label="Previous gallery slides"><ArrowLeft size={22} /></button><button type="button" onClick={() => go(first + perView)} disabled={first + perView >= photos.length} aria-label="Next gallery slides"><ArrowRight size={22} /></button></div></div>
      <div className="carousel-progress" aria-hidden="true"><span style={{width:`${Math.min(100,(first + perView) / photos.length * 100)}%`}} /></div>
      </div>
      <Dialog
        open={photo !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="gallery-dialog" onCloseAutoFocus={(event) => { event.preventDefault(); opener.current?.focus(); }}>
          <DialogTitle>{photo?.alt ?? "Event photograph"}</DialogTitle>
          <DialogDescription>
            From the Dr. Drunk event archive.
          </DialogDescription>
          {photo && (
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
            />
          )}
          <div className="gallery-controls">
            <button
              aria-label="Previous photo"
              disabled={selected === 0}
              onClick={() =>
                setSelected((i) => (i === null ? 0 : Math.max(0, i - 1)))
              }
            >
              <ArrowLeft size={22} />
            </button>
            <span>
              {selected === null ? "" : selected + 1} / {photos.length}
            </span>
            <button
              aria-label="Next photo"
              disabled={selected === photos.length - 1}
              onClick={() =>
                setSelected((i) =>
                  i === null ? 0 : Math.min(photos.length - 1, i + 1),
                )
              }
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
