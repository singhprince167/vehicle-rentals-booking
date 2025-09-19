"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Wrapper component to safely use searchParams inside Suspense
function HomePageContent() {
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

  const Gallery = [
    { key: "Haldwani", label: "Haldwani", img:"https://s3.india.com/wp-content/uploads/2024/07/monsooon-haldwani.jpg?impolicy=Medium_Widthonly&w=800&h=541", href: "/vehicles" },
    { key: "Bhimtal", label: "Bhimtal", img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0e/c6/c1/lake-side-seating.jpg?w=1000&h=-1&s=1", href: "/vehicles" },
    { key: "Nainital (via Nainital Road)", label: "Nainital (via Nainital Road)", img:"https://static2.tripoto.com/media/filter/nl/img/1984927/SpotDocument/1587896267_1587896200815.jpg.webp", href: "/vehicles" },
    { key: "Kainchi Dham (Kaichidham)", label: "Kainchi Dham (Kaichidham)", img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/08/kainchi-dham-1691568512.jpg", href: "/vehicles" },
    { key: "Bhowali", label: "Bhowali", img:"https://images.pexels.com/photos/10802891/pexels-photo-10802891.jpeg", href: "/vehicles" },
    { key: "Lalkuan", label: "Lalkuan", img:"https://www.madornomad.com/wp-content/uploads/2025/04/Ruta-de-las-Lagunas-Motorcycle-Travel-Bolivia-106.jpg.webp", href: "/vehicles" },
    { key: "Ranibagh", label: "Ranibagh", img:"https://www.reallybigbikeride.com/wp-content/uploads/2020/06/Royal-Enfield-Thunderbird-350-in-Dharamshala.jpeg", href: "/vehicles" },
    { key: "Jeolikot", label: "Jeolikot", img: "https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-12-13at3.45.01PM_20201213154522.png", href: "/vehicles" },
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

      {/* Categories */}
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

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Gallery.map((c) => (
            <Link key={c.label} href={c.href} className="group rounded-xl border overflow-hidden">
              <img src={getImg(c.key, c.img)} alt={c.label} className="h-40 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="p-4">
                <h3 className="font-medium">{c.label}</h3>
              </div>
            </Link>
          ))}
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

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
