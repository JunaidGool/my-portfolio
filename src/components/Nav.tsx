"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname() || "/";

  const linkClass =
    "transition hover:text-brand-primary-600 data-[active=true]:font-semibold";

  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur dark:bg-brand-text/80 dark:text-white">
      {/* Skip to content for a11y */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
                   bg-brand-primary-600 text-white px-3 py-1 rounded"
      >
        Skip to content
      </a>

      <nav className="container mx-auto flex items-center gap-6 py-4">
        <Link href="/" className={linkClass} data-active={pathname === "/"}>
          Home
        </Link>
        <Link
          href="/products"
          className={linkClass}
          data-active={pathname.startsWith("/products")}
        >
          Products
        </Link>
        <Link
          href="/contact"
          className={linkClass}
          data-active={pathname === "/contact"}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
