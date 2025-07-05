// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ──────────────────────────────────────────────────────────
   Small helper: reusable product card
────────────────────────────────────────────────────────── */
type CardProps = {
  href: string;
  img: string;
  title: string;
  blurb: string;
};

function ProductCard({ href, img, title, blurb }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition
                 hover:shadow-lg hover:ring-brand-primary-500"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 p-8 min-h-[260px]">
        <Image
          src={img}
          alt={`${title} logo`}
          width={110}
          height={110}
          className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
          priority
        />

        <div className="flex-1 space-y-3 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{blurb}</p>

          <Button
            size="sm"
            className="mt-2 group-hover:-translate-y-0.5 transition"
          >
            See live demo →
          </Button>
        </div>
      </div>
    </Link>
  );
}

/* ──────────────────────────────────────────────────────────
   Page component
────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/*  ⬅️  LEFT — Copy + CTAs  */}
          <div className="space-y-8 text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r
                     from-brand-primary-500 to-brand-accent-500 text-transparent bg-clip-text"
            >
              Micro-SaaS that moves money&nbsp;&amp; moves the needle.
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              I’m <strong>Junaid Gool</strong> — a South African software
              engineer shipping laser-focused products like{" "}
              <strong>ShapLink</strong> and
              <strong> StokFolio</strong>. Secure. Scalable. Demo-ready.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
              <Button
                className="min-w-[160px] shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
                asChild
              >
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                variant="secondary"
                className="min-w-[160px] shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
                asChild
              >
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>

          {/*  ➡️  RIGHT — Dashboard mock  */}
          <div className="hidden md:block">
            {/* replace src with a real screenshot later */}
            <Image
              src="/brand/shaplink-dashboard.png" // copy file to public/brand with this name
              alt="ShapLink dashboard"
              width={640}
              height={420}
              className="rounded-lg shadow-xl ring-1 ring-gray-200"
            />
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

          {/* Primary actions */}
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

          {/* Social links */}
          <div className="flex gap-6 pt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/junaidgool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-primary-600 transition"
              aria-label="LinkedIn profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M4.98 3.5C4.98 5 3.86 6 2.5 6S0 5 0 3.5 1.14 1 2.5 1 4.98 2 4.98 3.5zm.02 4.5H0v16h5V8zM8 8h4.8v2.2h.07c.67-1.3 2.3-2.7 4.73-2.7 5.06 0 6 3.33 6 7.67V24h-5v-6.9c0-1.64-.03-3.75-2.3-3.75-2.3 0-2.65 1.8-2.65 3.64V24H8V8z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/junaidgool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-primary-600 transition"
              aria-label="X profile"
            >
              {/* ← new X logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M22.162 0h-5.757l-4.947 7.964L6.62 0H0l8.279 12.617L.214 24h5.757l5.219-8.225L17.58 24h6.305l-8.665-12.857L22.162 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
