// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import "./globals.css"; // make sure this file exists (Tailwind base)

/* ---------- optional SEO / social tags ---------- */
export const metadata: Metadata = {
  title: "Junaid Gool | Portfolio",
  description: "Software engineer building micro-SaaS products.",
};

/* ---------- tiny top-nav shared by every page ---------- */
function Nav() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="container mx-auto flex gap-6 py-4">
        <Link href="/" className="font-bold">
          Home
        </Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

/* ---------- root layout wrapper ---------- */
export default function RootLayout({
  children,
}: {
  children: ReactNode; // ✅ typed – no more TS7031 warning
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow">{children}</main>
        {/* <Footer /> ← add later if you like */}
      </body>
    </html>
  );
}
