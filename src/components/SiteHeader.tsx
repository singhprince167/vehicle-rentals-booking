"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // optional,

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Updated: active link for underline
  const linkClass = (href: string) =>
    `hover:text-primary visited:text-foreground ${
      pathname === href
        ? "text-primary border-b-2 border-green-500" // active page indicator
        : "text-foreground border-b-2 border-transparent" // inactive
    } transition-colors`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-9 w-9 rounded bg-primary/10 ring-1 ring-primary/20" />
            <span className="font-semibold">Kathgodam Rentals</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm ">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/vehicles" className={linkClass("/vehicles")}>Vehicles</Link>
            <Link href="/booking" className={linkClass("/booking")}>Booking</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>

            <a
              href="https://wa.me/917705939987?text=Hello%20Prince%2C%20I%20want%20to%20book%20a%20Bike%2C%20Scooty%20and%20Car"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="justify-center whitespace-nowrap font-medium ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-primary hover:shadow-glow hover:scale-105 h-11 rounded-md px-8 bg-green-600 text-white hover:bg-green-600/90 transition-colors mt-2 flex items-center gap-2 text-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 ..."></path>
                </svg>
                WhatsApp Booking
              </button>
            </a>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t py-3 animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-3 text-sm">
              <Link onClick={() => setOpen(false)} href="/" className={`${linkClass("/")} py-1`}>
                Home
              </Link>
              <Link onClick={() => setOpen(false)} href="/vehicles" className={`${linkClass("/vehicles")} py-1`}>
                Vehicles
              </Link>
              <Link onClick={() => setOpen(false)} href="/booking" className={`${linkClass("/booking")} py-1`}>
                Booking
              </Link>
              <Link onClick={() => setOpen(false)} href="/about" className={`${linkClass("/about")} py-1`}>
                About
              </Link>
              <Link onClick={() => setOpen(false)} href="/contact" className={`${linkClass("/contact")} py-1`}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
