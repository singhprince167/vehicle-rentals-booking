"use client";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-muted-foreground">
            We are a local vehicle rental service based in Kathgodam, Uttarakhand. Our mission is to provide reliable, affordable and convenient rentals for travelers and locals alike. We offer doorstep delivery and pickup across Kathgodam, Haldwani, Bhimtal, Nainital road and nearby locations.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>• Easy bookings via WhatsApp & phone</li>
            <li>• Transparent pricing, no hidden charges</li>
            <li>• Well-maintained vehicles with timely service</li>
            <li>• 24x7 support for breakdowns and assistance</li>
          </ul>
        </div>
        <img className="w-full h-64 md:h-80 object-cover rounded" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop" alt="About our rental services" />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Policies</h2>
        <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <li className="rounded border p-4">Valid ID proof and driving license required.</li>
          <li className="rounded border p-4">Refundable security deposit for select vehicles.</li>
          <li className="rounded border p-4">Fuel not included unless specified.</li>
          <li className="rounded border p-4">Flexible pickup and delivery within service area.</li>
        </ul>
      </section>
    </main>
  );
}