"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import { storyChapters, TASTING_LINK } from "@/lib/brand-content";
export function Story() {
  return (
    <section
      id="story"
      className="story-section section-pad"
      aria-labelledby="story-title"
    >
      <p className="eyebrow">03 / Storytelling through cocktails</p>
      <div className="story-heading reveal">
        <h2 id="story-title">
          Your story.
          <br />
          Served with <span className="script">a twist.</span>
        </h2>
        <p>
          Your wedding shouldn’t feel like a template. Every function, every
          drink, every tiny detail can tell a little more of your story.
        </p>
      </div>
      <Tabs defaultValue="date" className="story-tabs">
        <div className="chapter-nav">
          <span className="chapter-label">IMAGINE YOUR MENU</span>
          <TabsList variant="line" aria-label="Wedding story chapters">
            {storyChapters.map((chapter) => (
              <TabsTrigger key={chapter.id} value={chapter.id}>
                <span>{chapter.number}</span>
                {chapter.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {storyChapters.map((chapter) => (
          <TabsContent value={chapter.id} key={chapter.id}>
            <div className="story-layout">
              <figure className="story-photo">
                <img
                  src={`/brand/${chapter.image}.webp`}
                  width="1000"
                  height="1500"
                  alt={chapter.alt}
                  loading="lazy"
                />
                <figcaption>
                  {chapter.number} / {chapter.name}
                </figcaption>
              </figure>
              <div className="story-content">
                <span className="chapter-number" aria-hidden="true">
                  {chapter.number}
                </span>
                <p className="eyebrow">A memory-lane menu</p>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <blockquote>{chapter.example}</blockquote>
                <a href={TASTING_LINK} className="text-link">
                  Let’s tell your story <ArrowUpRight size={18} />
                </a>
                <p className="concept-note">
                  An idea for your menu. Made personal when we meet.
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="story-ribbon">
        <span>Haldi</span>
        <i>✳</i>
        <span>Sangeet</span>
        <i>✳</i>
        <span>Wedding</span>
        <i>✳</i>
        <span>After party</span>
        <p>Every function. A different vibe.</p>
      </div>
    </section>
  );
}
