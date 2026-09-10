"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import photos from "@/lib/gallery-data.json";
export function EventArchive() {
  const [visible, setVisible] = useState(12),
    [selected, setSelected] = useState<number | null>(null);
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
      <div className="archive-grid">
        {photos.slice(0, visible).map((item, index) => (
          <button
            key={item.src}
            className="archive-item"
            onClick={() => setSelected(index)}
            aria-label={`Open photo ${index + 1}: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
            />
            <span>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Expand size={17} />
            </span>
          </button>
        ))}
      </div>
      {visible < photos.length && (
        <button
          className="button load-more"
          onClick={() => setVisible((v) => Math.min(v + 12, photos.length))}
        >
          More moments <span>{photos.length - visible} to explore</span>
        </button>
      )}
      <Dialog
        open={photo !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="gallery-dialog">
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
