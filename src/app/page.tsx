"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const getImg = (key: string, fallback: string) => searchParams.get(key) || fallback;

  const heroImg = getImg(
    "hero",
    "https://images.unsplash.com/photo-1584126997295-f9327e5ee374?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );

  const categories = [
    { key: "scooty", label: "Scooty", img:"https://etimg.etb2bimg.com/photo/73269142.cms", href: "/vehicles" },
    { key: "bike", label: "Bike", img:"https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962_1280.jpg", href: "/vehicles" },
    { key: "bullet", label: "Bullet", img:"https://cdn.pixabay.com/photo/2019/09/07/08/31/royal-enfield-4458232_960_720.jpg", href: "/vehicles" },
    { key: "car", label: "Car", img: "https://cdn.pixabay.com/photo/2018/01/30/02/06/car-3117778_1280.jpg", href: "/vehicles" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Motorbike on mountain road near Nainital"
          className="absolute inset-0 h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Ride Kathgodam with Ease</h1>
            <p className="mt-3 text-white/90">
              Two-wheelers and cars on rent with doorstep delivery in Kathgodam, Haldwani, Bhimtal and Nainital Road.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/booking" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black">
                Book Now
              </Link>
              <Link href="/vehicles" className="inline-flex items-center justify-center rounded-md border border-white/70 px-5 py-2.5 text-sm font-medium text-white">
                Browse Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section><br />

      {/* Key features */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Doorstep Delivery</h3>
            <p className="mt-1 text-sm text-muted-foreground">We deliver and pickup across Kathgodam & nearby.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Well-Maintained Fleet</h3>
            <p className="mt-1 text-sm text-muted-foreground">Scooty, bikes, Bullet and cars — serviced and clean.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Transparent Pricing</h3>
            <p className="mt-1 text-sm text-muted-foreground">No hidden charges. Daily & hourly packages available.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Quick Booking</h3>
            <p className="mt-1 text-sm text-muted-foreground">Reserve via WhatsApp or email in under a minute.</p>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-semibold">Service Area</h2>
          <p className="mt-2 text-muted-foreground">
            Kathgodam • Haldwani • Bhimtal • Nainital Road • Lalkuan and nearby locations.
          </p>
        </div>
      </section>

      {/* Categories preview */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-semibold">Popular Categories</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className="group rounded-xl border overflow-hidden">
              <img src={getImg(c.key, c.img)} alt={c.label} className="h-40 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="p-4">
                <h3 className="font-medium">{c.label}</h3>
                <p className="text-sm text-muted-foreground">Tap to view vehicles</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/vehicles" className="inline-flex rounded-md border px-4 py-2 text-sm">See all vehicles</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="rounded-2xl border p-6 sm:p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to ride?</h3>
          <p className="mt-1 text-muted-foreground">Check availability and prices instantly.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Book Now</Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}