// src/app/products/shaplink/page.tsx

"use client";

import Image from "next/image";

export default function ShapLinkPage() {
  return (
    <main className="px-6 py-20 mx-auto max-w-6xl space-y-10">
      {/* Headline + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Description */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-primary-600">
              ShapLink
            </h1>
            <p className="text-gray-600 text-lg">
              One API + dashboard to create PayShap and Capitec Pay links,
              return a unified webhook, and export clean reconciliation files.
            </p>
          </div>

          {/* Problem + Solution */}
          <section className="space-y-5 text-base text-gray-700 leading-relaxed">
            <p>
              South African merchants who want to accept real-time payments face
              a headache: they must manually create both PayShap requests and
              Capitec Pay links, juggle two dashboards, and reconcile multiple
              sources.
            </p>
            <p>
              <strong>ShapLink</strong> streamlines this by combining both
              payment methods into a single REST API and dashboard. You get one
              webhook, one place to track status, and one exportable CSV—
              designed for real-world merchant workflows.
            </p>
          </section>
        </div>

        {/* Right: Dashboard Image */}
        <div>
          <Image
            src="/brand/shaplink-dashboard.png"
            alt="ShapLink dashboard preview"
            width={960}
            height={540}
            className="rounded-xl border shadow-md mx-auto"
            priority
          />
        </div>
      </div>

      {/* TODO: Embed iframe or Loom video below once ready */}
    </main>
  );
}
