"use client";
import { useState } from "react";
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
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Dr. Drunk home">
        <img src="/brand/logo.webp" alt="Dr. Drunk" width="210" height="57" />
      </a>
      <nav aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a
            href={href}
            key={href}
            aria-current={path === href ? "page" : undefined}
          >
            {label}
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
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ArrowUpRight size={22} />
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)}>
              Book a tasting
              <ArrowUpRight size={22} />
            </a>
          </nav>
          <p className="script">Let’s make it a good one.</p>
        </SheetContent>
      </Sheet>
    </header>
  );
}
