"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "ShapLink", href: "/products/shaplink" },
  { name: "StokFolio", href: "/products/stokfolio" },
  {
    name: "Portfolio Repo",
    href: "https://github.com/JunaidGool",
    external: true,
  },
];

export default function Hero() {
  return (
    <section className="py-12 bg-brand-bg flex justify-center">
      <div
        className="
          relative isolate overflow-hidden
          w-full max-w-7xl
          rounded-lg sm:rounded-xl
          bg-white ring-1 ring-gray-200
          px-6 sm:px-16 py-24
          grid gap-16 md:grid-cols-[2fr_1fr]
        "
      >
        {/* ── Decorative corners (30 % opacity) ── */}
        <Corner pos="top-left" />
        <Corner pos="bottom-right" />

        {/* ── Left: greeting & intro ── */}
        <div className="space-y-10">
          <h1 className="text-brand-text font-extrabold text-5xl sm:text-6xl tracking-tight leading-tight">
            Welcome<span className="text-brand-primary-500">.</span>
          </h1>

          <div className="border-l-2 border-brand-primary-500/70 pl-6 space-y-6">
            <p>
              I'm <strong>Junaid Gool</strong>, a software engineer based in
              Cape Town, South Africa.
            </p>
            <p>
              I care deeply about lean architecture, beautiful interfaces, and
              writing code thats a pleasure to maintain.
            </p>
            <p>
              Im driven by building real-world solutions for real-world
              problems, especially those that empower underserved communities.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Button asChild variant="secondary" className="min-w-[160px]">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* ── Right: project list ── */}
        <aside className="space-y-6">
          <h2 className="text-2xl font-semibold text-brand-text">Projects</h2>

          <ul className="space-y-4 border-l-2 pl-4 border-brand-primary-500/70">
            {projects.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.href}
                  target={p.external ? "_blank" : "_self"}
                  className="
                    underline underline-offset-4 decoration-brand-primary-500
                    hover:text-brand-primary-500 hover:decoration-2
                  "
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="pt-8 text-xs text-brand-text/60">
            “Simplicity scales. Empathy matters. Thats where good software
            starts.”
          </p>
        </aside>
      </div>
    </section>
  );
}

/* ───────── Corner component ───────── */
function Corner({ pos }: { pos: "top-left" | "bottom-right" }) {
  const base = "absolute h-44 w-44 pointer-events-none"; // removed opacity-30
  const gradient = "from-brand-primary-500 to-brand-accent-500";

  return pos === "top-left" ? (
    <div className={`${base} inset-0`}>
      <div
        className={`h-full w-4 bg-gradient-to-b ${gradient} shadow-brand-primary-500/10 shadow-lg`}
      />
      <div
        className={`absolute top-0 left-0 h-4 w-full bg-gradient-to-r ${gradient} shadow-brand-primary-500/10 shadow-lg`}
      />
    </div>
  ) : (
    <div className={`${base} bottom-0 right-0 rotate-180`}>
      <div
        className={`h-full w-4 bg-gradient-to-b ${gradient} shadow-brand-primary-500/10 shadow-lg`}
      />
      <div
        className={`absolute top-0 left-0 h-4 w-full bg-gradient-to-r ${gradient} shadow-brand-primary-500/10 shadow-lg`}
      />
    </div>
  );
}
