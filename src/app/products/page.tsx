// src/app/products/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

/* ────────────────────────────────
   Block component
────────────────────────────────── */
type BlockProps = {
  index: number;
  img: string;
  title: string;
  problem: string;
  fix: string;
  href: string;
};

function ProductBlock({ index, img, title, problem, fix, href }: BlockProps) {
  const reverse = index % 2 !== 0; // flip every second card

  return (
    <div
      className={`col-span-full lg:col-span-6 ${
        reverse ? "lg:col-start-7" : ""
      }`}
    >
      <article className="group relative flex gap-6 rounded-2xl bg-white p-10 shadow-md ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-xl">
        {/* Accent bar */}
        <span className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-primary-500 via-brand-accent-500 to-brand-primary-500" />

        {/* Logo */}
        <Image
          src={img}
          alt={`${title} logo`}
          width={72}
          height={72}
          priority
          className="w-18 h-18 object-contain flex-shrink-0"
        />

        {/* Copy */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

          <div className="flex items-start gap-2">
            <XCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0" />
            <p className="text-sm leading-relaxed text-gray-600">{problem}</p>
          </div>

          <div className="flex items-start gap-2">
            <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <p className="text-sm leading-relaxed text-gray-600">{fix}</p>
          </div>

          <div className="text-right pt-2">
            <Button asChild size="sm">
              <Link href={href}>View details →</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ────────────────────────────────
   Page component
────────────────────────────────── */
export const metadata = {
  title: "Products | Junaid Gool",
  description:
    "Micro-SaaS tools that move money fast: ShapLink and StokFolio by Junaid Gool.",
};

export default function ProductsPage() {
  return (
    <main className="pt-12 pb-32 bg-slate-50 dark:bg-slate-900/50">
      {/* Heading */}
      <header className="mx-auto mb-12 max-w-4xl px-6 text-center space-y-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-1 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-brand-primary-600">
                Home
              </Link>{" "}
              /
            </li>
            <li className="font-medium text-gray-700">Products</li>
          </ol>
        </nav>

        {/* Gradient headline */}
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight
                 bg-gradient-to-r from-brand-primary-500 to-brand-accent-500
                 text-transparent bg-clip-text"
        >
          Products
        </h1>

        {/* Sub-copy */}
        <p className="mx-auto max-w-xl text-gray-600 md:text-lg leading-relaxed">
          Purpose-built micro-SaaS that solves razor-sharp fintech
          pain-points—battle-tested, demo-ready, and built to scale.
        </p>

        {/* Divider */}
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-brand-primary-500/0 via-brand-primary-500 to-brand-primary-500/0" />
      </header>

      {/* Products grid */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-10">
          <ProductBlock
            index={0}
            img="/brand/shaplink-thumb.png"
            title="ShapLink"
            problem="Merchants juggling PayShap requests + Capitec Pay links deal with two APIs, two dashboards, and reconciliation headaches."
            fix="ShapLink provides one REST API & dashboard that generates both links, funnels them through a single webhook, and exports a clean CSV."
            href="/products/shaplink"
          />

          <ProductBlock
            index={1}
            img="/brand/stokfolio-thumb.png"
            title="StokFolio"
            problem="Stokvels still rely on WhatsApp threads and spreadsheets — balances are opaque, votes messy, audit trails vanish."
            fix="StokFolio is a real-time cockpit: auto-records contributions, shows live balances, runs in-app voting, and exports an audit-ready ledger."
            href="/products/stokfolio"
          />
        </div>
      </section>
    </main>
  );
}
