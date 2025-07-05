// src/app/products/page.tsx
import React from "react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/products/shaplink" className="text-blue-600 underline">
            ShapLink
          </Link>{" "}
          – Unified PayShap & Capitec Pay links
        </li>
        <li>
          <Link href="/products/stokfolio" className="text-blue-600 underline">
            StokFolio
          </Link>{" "}
          – Online cockpit for stokvels
        </li>
      </ul>
    </main>
  );
}
