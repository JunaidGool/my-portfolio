// src/app/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import { inter, jbmono } from "@/fonts";
import Providers from "@/providers/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "./globals.css"; // Tailwind base + your globals

export const metadata: Metadata = {
  title: "Junaid Gool | Portfolio",
  description: "Software engineer building micro-SaaS products.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jbmono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
        <Providers>
          <Nav />

          {/* Main content */}
          <main id="content" className="flex-1">
            {children}
          </main>

          {/* Site-wide footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
