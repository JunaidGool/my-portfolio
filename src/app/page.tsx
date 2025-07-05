// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ──────────────────────────────────────────────────────────
   Simple slider: fades between two images every 4s
────────────────────────────────────────────────────────── */
function SimpleSlider() {
  const slides = [
    { src: "/brand/shaplink-dashboard.png", alt: "ShapLink dashboard" },
    { src: "/brand/stokfolio-dashboard.png", alt: "StokFolio dashboard" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl ring-1 ring-gray-200">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-contain"
            priority
          />
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Product card
────────────────────────────────────────────────────────── */
type CardProps = { href: string; img: string; title: string; blurb: string };

function ProductCard({ href, img, title, blurb }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl bg-white shadow-sm ring-1 ring-gray-200
                 transition hover:shadow-lg hover:ring-brand-primary-500"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 p-8 min-h-[260px]">
        <Image
          src={img}
          alt={`${title} logo`}
          width={110}
          height={110}
          className="w-24 h-24 object-contain transition-transform group-hover:scale-105"
          priority
        />
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{blurb}</p>
          <Button
            size="sm"
            className="mt-2 transition group-hover:-translate-y-0.5"
          >
            See live demo →
          </Button>
        </div>
      </div>
    </Link>
  );
}

/* ──────────────────────────────────────────────────────────
   Home page
────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 lg:py-32 bg-slate-50 ">
        <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT */}
          <div className="space-y-8 text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight
                         bg-gradient-to-r from-brand-primary-500 to-brand-accent-500
                         text-transparent bg-clip-text"
            >
              Micro-SaaS that moves money&nbsp;&amp; moves the needle.
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              I’m <strong>Junaid Gool</strong> — a South African software
              engineer shipping laser-focused products like{" "}
              <strong>ShapLink</strong> and <strong>StokFolio</strong>. Secure.
              Scalable. Demo-ready.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
              <Button
                asChild
                className="min-w-[160px] shadow-md hover:shadow-lg transition hover:-translate-y-0.5"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="min-w-[160px] shadow-md hover:shadow-lg transition hover:-translate-y-0.5"
              >
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block">
            <SimpleSlider />
          </div>
        </div>
      </section>

      {/* PRODUCTS STRIP */}
      <section id="projects" className="py-24 bg-brand-bg">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            <ProductCard
              href="/products/shaplink"
              img="/brand/shaplink-thumb.png"
              title="ShapLink"
              blurb="One API & dashboard to generate PayShap + Capitec Pay links via a single webhook. Perfect for merchants needing instant bank-to-bank payments."
            />
            <ProductCard
              href="/products/stokfolio"
              img="/brand/stokfolio-thumb.png"
              title="StokFolio"
              blurb="Real-time cockpit for stokvels — collect contributions, track balances, run votes, and export ledgers in one click."
            />
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl font-semibold">
            Let’s build something together.
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="min-w-[160px]">
              <a href="mailto:junaid@example.com">Book a coffee-chat</a>
            </Button>
            <Button variant="outline" asChild className="min-w-[160px]">
              <Link href="https://github.com/JunaidGool" target="_blank">
                View my GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
