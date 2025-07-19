// src/components/Footer.tsx
"use client";

import CTA from "@/components/CTA";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* Inline SVG for the new X logo */
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M93.1 10H110L72 57l46 53H101L63 67l-37 43H10l38-47L3 10h18l32 37 40-37z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://twitter.com/yourhandle",
      icon: XIcon,
      label: "X (Twitter)",
    },
    {
      href: "https://linkedin.com/in/yourhandle",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/yourhandle", icon: Github, label: "GitHub" },
    { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer
      className="
        bg-gradient-to-b
        from-brand-primary-500
        via-brand-primary-600
        to-brand-accent-500
        text-center text-white
        pt-0 pb-24 px-6
      "
    >
      {/* Pull CTA up by 2rem */}
      <div className="-mt-8">
        <CTA />
      </div>

      <div className="flex justify-center mt-6 mb-10">
        <Image
          src="/brand/logo_JG_white.png"
          alt="JG logo"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* Tagline */}
      <p className="text-2xl font-medium leading-snug mb-10">
        Living, learning, &amp; leveling up
        <br /> one day at a time.
      </p>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-16">
        {socials.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="group rounded-full border border-white/50 p-4 hover:bg-white/10 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </Link>
        ))}
      </div>

      {/* Credits */}
      <p className="text-sm mb-1">Handcrafted by me © {year}</p>
      <p className="text-xs text-white/70">
        Made with <span className="font-semibold">Bulma</span>
      </p>
    </footer>
  );
}
