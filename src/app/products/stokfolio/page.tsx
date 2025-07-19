// src/app/products/stokfolio/page.tsx

"use client";

import Image from "next/image";
import React from "react";

export default function StokFolioPage() {
  return (
    <main className="px-6 py-20 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Textual content */}
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-primary-600">
              StokFolio
            </h1>
            <p className="text-gray-600 text-lg">
              A digital cockpit for stokvels—track contributions, monitor live
              balances, run votes, and export ledgers with clarity and trust.
            </p>
          </div>

          {/* Problem + Solution */}
          <section className="space-y-5 text-base text-gray-700 leading-relaxed">
            <p>
              Stokvels are one of South Africa’s most powerful financial tools—
              but many still rely on WhatsApp, spreadsheets, and verbal trust.
              Contributions go untracked, balances aren’t visible, and decisions
              lack transparency.
            </p>
            <p>
              <strong>StokFolio</strong> replaces these manual systems with a
              secure, purpose-built dashboard designed to support what stokvels
              already do—just better. Groups can track payments, vote on
              decisions, and export audit-ready records in seconds.
            </p>
          </section>
        </div>

        {/* Right: Dashboard mock image */}
        <div>
          <Image
            src="/brand/stokfolio-dashboard.png"
            alt="StokFolio dashboard preview"
            width={960}
            height={540}
            className="rounded-xl border shadow-md mx-auto"
            priority
          />
        </div>
      </div>

      {/* Optional future embed area */}
      <div className="mt-20">
        {/* TODO: Embed Loom video or live iframe once ready */}
      </div>
    </main>
  );
}
