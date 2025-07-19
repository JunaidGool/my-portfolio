// src/components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Nav() {
  const pathname = usePathname() || "/";
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white ring-1 ring-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-16">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo_JG.png"
            alt="JG logo"
            width={75}
            height={75}
            priority
          />
          <span className="font-bold text-lg text-gray-900">Portfolio</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    transition decoration-transparent underline-offset-4
                    hover:decoration-brand-primary-500
                    ${
                      isActive
                        ? "font-semibold decoration-2 decoration-gradient-to-r from-brand-primary-500 to-brand-accent-500"
                        : "text-gray-700 hover:text-gray-900"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open navigation menu"
              className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </SheetTrigger>

          {/* Partial-width slide-over */}
          <SheetContent
            side="left"
            className="
              fixed top-0 left-0 z-50
              w-64 md:w-80
              h-auto max-h-screen overflow-y-auto
              bg-brand-text/95 backdrop-blur-md
              text-white flex flex-col shadow-lg
            "
          >
            {/* Hidden title for accessibility */}
            <SheetTitle className="sr-only">Main navigation</SheetTitle>

            {/* Close button */}
            <div className="flex justify-end p-4">
              <SheetClose asChild>
                <button
                  aria-label="Close navigation menu"
                  className="p-1 rounded hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <X size={20} />
                </button>
              </SheetClose>
            </div>

            {/* Nav links */}
            <ul className="px-6 pb-6 space-y-4">
              {links.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <SheetClose asChild>
                      <Link
                        href={href}
                        className={`
                          block text-xl py-2 transition
                          ${
                            isActive
                              ? "text-brand-accent-500 font-semibold"
                              : "text-white/80 hover:text-white"
                          }
                        `}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
