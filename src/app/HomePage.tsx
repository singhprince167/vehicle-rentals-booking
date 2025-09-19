"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const getImg = (key: string, fallback: string) =>
    searchParams.get(key) || fallback;

  const heroImg = getImg(
    "hero",
    "https://images.unsplash.com/photo-1584126997295-f9327e5ee374?q=80&w=1631&auto=format&fit=crop"
  );

  const categories = [
    { key: "scooty", label: "Scooty", img:"https://etimg.etb2bimg.com/photo/73269142.cms", href: "/vehicles" },
    { key: "bike", label: "Bike", img:"https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962_1280.jpg", href: "/vehicles" },
    { key: "bullet", label: "Bullet", img:"https://cdn.pixabay.com/photo/2019/09/07/08/31/royal-enfield-4458232_960_720.jpg", href: "/vehicles" },
    { key: "car", label: "Car", img:"https://cdn.pixabay.com/photo/2018/01/30/02/06/car-3117778_1280.jpg", href: "/vehicles" },
  ];

  const gallery = [
    { key: "Haldwani", label: "Haldwani", img:"https://s3.india.com/wp-content/uploads/2024/07/monsooon-haldwani.jpg?impolicy=Medium_Widthonly&w=800&h=541", href: "/vehicles" },
    { key: "Bhimtal", label: "Bhimtal", img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0e/c6/c1/lake-side-seating.jpg?w=1000&h=-1&s=1", href: "/vehicles" },
    { key: "Nainital", label: "Nainital (via Nainital Road)", img:"https://static2.tripoto.com/media/filter/nl/img/1984927/SpotDocument/1587896267_1587896200815.jpg.webp", href: "/vehicles" },
    { key: "Kainchi Dham", label: "Kainchi Dham (Kaichidham)", img:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/08/kainchi-dham-1691568512.jpg", href: "/vehicles" },
    { key: "Bhowali", label: "Bhowali", img:"https://images.pexels.com/photos/10802891/pexels-photo-10802891.jpeg", href: "/vehicles" },
    { key: "Lalkuan", label: "Lalkuan", img:"https://www.madornomad.com/wp-content/uploads/2025/04/Ruta-de-las-Lagunas-Motorcycle-Travel-Bolivia-106.jpg.webp", href: "/vehicles" },
    { key: "Ranibagh", label: "Ranibagh", img:"https://www.reallybigbikeride.com/wp-content/uploads/2020/06/Royal-Enfield-Thunderbird-350-in-Dharamshala.jpeg", href: "/vehicles" },
    { key: "Jeolikot", label: "Jeolikot", img:"https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-12-13at3.45.01PM_20201213154522.png", href: "/vehicles" },
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
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Ride Kathgodam with Ease
            </h1>
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
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-semibold">Popular Categories</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className="group rounded-xl border overflow-hidden">
              <img
                src={getImg(c.key, c.img)}
                alt={c.label}
                className="h-40 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-medium">{c.label}</h3>
                <p className="text-sm text-muted-foreground">Tap to view vehicles</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((c) => (
            <Link key={c.label} href={c.href} className="group rounded-xl border overflow-hidden">
              <img
                src={getImg(c.key, c.img)}
                alt={c.label}
                className="h-40 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-medium">{c.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
