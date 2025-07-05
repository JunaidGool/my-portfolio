// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { inter, jbmono } from "@/fonts";
import Providers from "@/providers/theme-provider";

import "./globals.css"; // make sure this file exists (Tailwind base)

/* ---------- optional SEO / social tags ---------- */
export const metadata: Metadata = {
  title: "Junaid Gool | Portfolio",
  description: "Software engineer building micro-SaaS products.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  },
};

/* ---------- tiny top-nav shared by every page ---------- */
function Nav() {
  return (
    <header className="w-full border-b bg-white dark:bg-brand-text dark:text-white">
      <nav className="container mx-auto flex gap-6 py-4">
        <Link href="/" className="font-bold text-brand-primary-600">
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
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // ✅ added
      className={`${inter.variable} ${jbmono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Nav />
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
