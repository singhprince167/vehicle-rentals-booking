"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const linkClass = (href: string) =>
    `hover:text-primary visited:text-foreground ${
      pathname === href ? "text-primary" : "text-foreground"
    }`;
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-9 w-9 rounded bg-primary/10 ring-1 ring-primary/20" />
            <span className="font-semibold">Kathgodam Rentals</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={linkClass("/")}>Home</Link>
            <Link href="/vehicles" aria-current={pathname === "/vehicles" ? "page" : undefined} className={linkClass("/vehicles")}>Vehicles</Link>
            <Link href="/booking" aria-current={pathname === "/booking" ? "page" : undefined} className={linkClass("/booking")}>Booking</Link>
            <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={linkClass("/about")}>About</Link>
            <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={linkClass("/contact")}>Contact</Link>
          </nav>

          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t py-3 animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-3 text-sm">
              <Link onClick={() => setOpen(false)} href="/" aria-current={pathname === "/" ? "page" : undefined} className={`${linkClass("/")} py-1`}>Home</Link>
              <Link onClick={() => setOpen(false)} href="/vehicles" aria-current={pathname === "/vehicles" ? "page" : undefined} className={`${linkClass("/vehicles")} py-1`}>Vehicles</Link>
              <Link onClick={() => setOpen(false)} href="/booking" aria-current={pathname === "/booking" ? "page" : undefined} className={`${linkClass("/booking")} py-1`}>Booking</Link>
              <Link onClick={() => setOpen(false)} href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={`${linkClass("/about")} py-1`}>About</Link>
              <Link onClick={() => setOpen(false)} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={`${linkClass("/contact")} py-1`}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}