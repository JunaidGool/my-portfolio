import { Metadata } from "next";

import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Junaid Gool – Developer Portfolio",
  description:
    "Handcrafted micro-SaaS demos (ShapLink & StokFolio), engineering deep dives, and more from Junaid Gool.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Startup Projects Header Section */}
      <section className="bg-gradient-to-b from-brand-primary-500 to-brand-accent-500 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            My Startup Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-white/90">
            These aren&rsquo;t just portfolio pieces — they&rsquo;re real tools
            built from real needs. I&rsquo;m especially interested in how
            underserved South Africans save, invest, and collaborate. Stokvels
            are one of the strongest examples of that — so I&rsquo;m building
            for them.
          </p>
        </div>
      </section>

      {/* 3. Product Cards (slightly overlapping the section above) */}
      <section className="-mt-12 relative z-10">
        <div className="max-w-screen-xl mx-auto px-6 py-24 grid gap-10 sm:grid-cols-2">
          <ProductCard
            title="ShapLink"
            img="/brand/shaplink-thumb.png"
            blurb="One API & dashboard to generate PayShap + Capitec Pay links via a single webhook."
            href="/products/shaplink"
            status="in-flight"
          />
          <ProductCard
            title="StokFolio"
            img="/brand/stokfolio-thumb.png"
            blurb="Real-time cockpit for stokvels — collect contributions, track balances, run votes."
            href="/products/stokfolio"
            status="in-flight"
          />
        </div>
      </section>
    </main>
  );
}
