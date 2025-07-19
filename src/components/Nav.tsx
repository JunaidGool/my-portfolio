"use client";

import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-50 bg-white ring-1 ring-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-16">
        {/* Brand logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo_JG.png"
            alt="JG logo"
            width={100}
            height={100}
            priority
          />
          <span className="font-bold text-lg text-gray-900">Portfolio</span>
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="rounded-full border-2 border-brand-primary-500 px-4 py-1.5 text-sm font-medium text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white transition"
          >
            Say Hello
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-64 bg-brand-text/95 text-white backdrop-blur-lg shadow-xl"
          >
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

            {/* Close button */}
            <div className="flex justify-end p-4">
              <SheetClose asChild>
                <button
                  aria-label="Close menu"
                  className="p-1 rounded hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <X size={20} />
                </button>
              </SheetClose>
            </div>

            {/* CTA link only */}
            <ul className="px-6 pb-6">
              <li>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="block text-lg font-medium py-2 text-white hover:text-brand-accent-400 transition"
                  >
                    Say Hello
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
