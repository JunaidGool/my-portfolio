// src/app/page.tsx

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

      {/* 2. Section header with subtle blue→teal gradient */}
      <section className="bg-gradient-to-b from-brand-primary-500 to-brand-accent-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            My Startup Projects
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base leading-relaxed">
            These aren’t just portfolio pieces — they’re real tools built from
            real needs. I’m especially interested in how underserved South
            Africans save, invest, and collaborate. Stokvels are one of the
            strongest examples of that — so I’m building for them.
          </p>
        </div>
      </section>

      {/* 3. Product cards – slight overlap with header */}
      <section
        className="
          container mx-auto px-6
          -mt-12      /* pull up 3rem to overlap header */
          pb-16
          grid gap-8 sm:grid-cols-2 lg:grid-cols-2
        "
      >
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
      </section>
    </main>
  );
}
