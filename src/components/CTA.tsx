"use client";

import Link from "next/link";
import { Coffee } from "lucide-react";

/**
 * Wide call-to-action bar
 * – Sits inside the footer and is flush with its top edge (no external margin)
 * – ≈90 % viewport width, capped at 7xl
 * – Rounded navy background, two-line description, accent-green pill button
 */
export default function CTA() {
  return (
    <section
      className="bg-brand-text rounded-3xl mx-auto
                 w-11/12 md:w-10/12 lg:w-9/12 max-w-7xl
                 py-10 px-6 md:px-12
                 flex flex-col md:flex-row items-center gap-8"
    >
      {/* Heading – locked to one line */}
      <h2 className="text-4xl font-bold text-white whitespace-nowrap flex-shrink-0">
        Start a project
      </h2>

      {/* Copy – forced into two explicit lines */}
      <p className="flex-1 text-lg text-white text-center md:text-left">
        <span className="block">
          Interested in working together? We should queue up a time to chat.
        </span>
        <span className="block">I’ll buy the coffee.</span>
      </p>

      {/* Accent-green pill button */}
      <Link
        href="/contact"
        className="inline-flex items-center gap-3
                   border-2 border-teal-400 text-teal-400
                   rounded-full px-8 py-3
                   hover:bg-teal-400 hover:text-white transition-colors"
      >
        <Coffee className="w-5 h-5" />
        Let&rsquo;s do this
      </Link>
    </section>
  );
}
