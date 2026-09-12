"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { BrandIllustration } from "@/components/sections/BrandIllustration";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
const links = [
  ["Cocktails", "/cocktails"],
  ["Weddings", "/weddings"],
  ["Experiences", "/experiences"],
  ["Gallery", "/gallery"],
  ["The practice", "/about"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menu = useRef<HTMLElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  function highlight(link: HTMLElement | null) {
    if (!pill.current) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.32;
    if (!link) { gsap.to(pill.current, { opacity: 0, duration }); return; }
    gsap.to(pill.current, { x: link.offsetLeft, y: link.offsetTop, width: link.offsetWidth, height: link.offsetHeight, opacity: 1, duration, ease: "power3.out", overwrite: true });
  }
  useEffect(() => {
    const reset = () => highlight(menu.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null);
    reset();
    const resize = new ResizeObserver(reset);
    if (menu.current) resize.observe(menu.current);
    const element = pill.current;
    return () => { resize.disconnect(); if (element) gsap.killTweensOf(element); };
  }, [path]);
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Dr. Drunk home">
        <img src="/brand/logo-transparent.svg" alt="Dr. Drunk" width="210" height="57" />
      </a>
      <nav ref={menu} className="glass-nav" aria-label="Main navigation" onMouseLeave={() => highlight(menu.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) highlight(menu.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null); }}>
        <span className="nav-glass-pill" ref={pill} aria-hidden="true" />
        {links.map(([label, href]) => (
          <a
            href={href}
            key={href}
            aria-current={path === href ? "page" : undefined}
            onMouseEnter={(event) => highlight(event.currentTarget)}
            onFocus={(event) => highlight(event.currentTarget)}
          >
            <span className="nav-label"><span>{label}</span><span aria-hidden="true">{label}</span></span>
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/contact">
        Let’s raise the bar <ArrowUpRight size={18} />
      </a>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="mobile-menu-button"
          aria-label="Open navigation"
        >
          <Menu size={25} />
        </SheetTrigger>
        <SheetContent className="mobile-menu">
          <SheetHeader>
            <SheetTitle>Dr. Drunk</SheetTitle>
            <SheetDescription>Your party practitioners.</SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>
                <span>{label}</span>
                <ArrowUpRight size={22} />
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)}>
              Book a tasting
              <ArrowUpRight size={22} />
            </a>
          </nav>
          <div className="menu-illustration"><BrandIllustration kind="cocktail" /></div>
          <p className="script">Let’s make it a good one.</p>
        </SheetContent>
      </Sheet>
    </header>
  );
}
