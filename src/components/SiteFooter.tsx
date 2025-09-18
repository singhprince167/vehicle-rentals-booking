"use client";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">Kathgodam Rentals</h3>
          <p className="text-sm text-muted-foreground">Two-wheelers & four-wheelers on rent in Kathgodam and nearby areas.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Phone: <a className="underline" href="tel:+917705939987">+91 77059 39987</a></li>
            <li>WhatsApp: <a className="underline" href="https://wa.me/917705939987" target="_blank">Chat on WhatsApp</a></li>
            <li>Email: <a className="underline" href="mailto:Princekumarsingh167@gmail.com">Princekumarsingh167@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Follow</h4>
          <div className="flex gap-3 text-sm">
            <a className="underline" href="https://www.facebook.com/ThePrinceSingh167/" aria-label="Facebook">Facebook</a>
            <a className="underline" href="https://www.instagram.com/prince_singh167/" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kathgodam Rentals. All rights reserved.
      </div>
    </footer>
  );
}