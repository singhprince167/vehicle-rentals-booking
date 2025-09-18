"use client";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Contact Us.</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="space-y-3 text-sm">
          <p>Phone: <a className="underline" href="tel:+919792949822">+91 97929 49822</a></p>
          <p>WhatsApp: <a className="underline" href="https://wa.me/919792949822" target="_blank">Chat on WhatsApp</a></p>
          <p>Email: <a className="underline" href="mailto:shikshartinfo@gmail.com">shikshartinfo@gmail.com</a></p>
          <div className="pt-2">
            <p className="font-medium">Service Area</p>
            <p className="text-muted-foreground">Kathgodam, Haldwani, Bhimtal, Nainital Road & nearby.</p>
          </div>
          <div className="pt-2">
            <p className="font-medium">Social</p>
            <div className="flex gap-3">
              <a className="underline" href="https://www.linkedin.com/company/sahind-technologies/">Facebook</a>
              <a className="underline" href="https://www.instagram.com/shikshart_com/?igsh=MTgydHV3eW54N242aw%3D%3D#">Instagram</a>
            </div>
          </div>
        </div>
        <div>
          <iframe
            title="Map to Kathgodam Rentals"
            className="w-full h-72 rounded border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kathgodam%20Railway%20Station&output=embed"
          />
        </div>
      </div>
    </main>
  );
}