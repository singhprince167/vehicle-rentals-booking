"use client";

import { useMemo, useState } from "react";

const SERVICE_LOCATIONS = [
  "Kathgodam",
  "Haldwani",
  "Bhimtal",
  "Nainital Road",
  "Lalkuan",
];

const VEHICLES = [
  { label: "Scooty", value: "scooty" },
  { label: "Bike", value: "bike" },
  { label: "Bullet", value: "bullet" },
  { label: "Car", value: "car" },
];

const WHATSAPP_NUMBER = "9792949822"; // Change to your business number
const ADMIN_EMAIL = "shikshartinfo@gmail.com"; // Change to your email

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "scooty",
    location: "Kathgodam",
    date: "",
    time: "",
    notes: "",
    delivery: "delivery",
  });

  const isValid = useMemo(() => {
    return (
      form.name.trim() &&
      /^\+?\d{10,14}$/.test(form.phone.replace(/\s+/g, "")) &&
      form.date &&
      form.time
    );
  }, [form]);

  const message = useMemo(() => {
    const lines = [
      `New Rental Inquiry — Kathgodam Rentals`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Vehicle: ${VEHICLES.find(v=>v.value===form.vehicle)?.label}`,
      `Service: ${form.delivery === "delivery" ? "Home Delivery" : "Pickup"}`,
      `Location: ${form.location}`,
      `Pickup Date: ${form.date}`,
      `Pickup Time: ${form.time}`,
      form.notes ? `Notes: ${form.notes}` : undefined,
    ].filter(Boolean).join("%0A");
    return lines;
  }, [form]);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  const mailto = `mailto:${ADMIN_EMAIL}?subject=New%20Rental%20Inquiry&body=${message}`;

  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Book Your Ride</h1>
      <p className="mt-2 text-muted-foreground">Fill the form and send your request on WhatsApp or Email. We will confirm the availability shortly.</p>

      <form
        onSubmit={(e) => { e.preventDefault(); window.open(waLink, "_blank"); }}
        className="mt-8 grid gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Mobile Number</label>
            <input
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              placeholder="e.g. +91 98765 43210"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              inputMode="tel"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Vehicle Type</label>
            <select
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
            >
              {VEHICLES.map((v) => (
                <option key={v.value} value={v.value}>{v.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Delivery or Pickup</label>
            <select
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={form.delivery}
              onChange={(e) => setForm({ ...form, delivery: e.target.value })}
            >
              <option value="delivery">Home Delivery</option>
              <option value="pickup">Self Pickup</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Preferred Location</label>
          <select
            className="mt-1 w-full rounded-md border bg-background px-3 py-2"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          >
            {SERVICE_LOCATIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Pickup Date</label>
            <input
              type="date"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Pickup Time</label>
            <input
              type="time"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Additional Notes (optional)</label>
          <textarea
            className="mt-1 w-full rounded-md border bg-background px-3 py-2"
            rows={3}
            placeholder="Helmet requirement, luggage, outstation trip, etc."
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" disabled={!isValid} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50">Send on WhatsApp</button>
          <a aria-disabled={!isValid} className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm disabled:pointer-events-none disabled:opacity-50" href={isValid ? mailto : undefined}>Send via Email</a>
          <a className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm" href={`tel:+${WHATSAPP_NUMBER}`}>Call Us</a>
        </div>

        <p className="text-xs text-muted-foreground">By submitting, you agree to our rental policies and terms.</p>
      </form>
    </main>
  );
}