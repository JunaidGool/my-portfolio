"use client";

import CTA from "@/components/CTA";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Github, Linkedin, X as XIcon } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-bg">
      {/* full-width gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-500 to-brand-accent-500" />

      {/* === CTA CARD (flush against top gradient) === */}
      <div className="relative mx-auto w-full max-w-6xl">
        <div
          className="
            rounded-2xl bg-[#0F172A]
            px-10 py-12
            text-brand-bg
            shadow-lg ring-1 ring-brand-primary-500/30
            grid gap-8 md:grid-cols-[1fr_auto_auto]
            items-center
          "
        >
          <h2 className="text-step-3 font-semibold text-white">
            Start a project
          </h2>
          <p className="max-w-prose text-step--1 text-white/90 text-center md:text-left">
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              flex items-center gap-2 rounded-full border-2
              border-brand-accent-500 px-8 py-3
              hover:bg-brand-accent-500/10 transition
            "
          >
            <Link href="mailto:junaid@example.com">
              <Coffee className="h-4 w-4 text-white" />
              Let’s do this
            </Link>
          </Button>
        </div>
      </div>

      {/* === Footer content (spaced below CTA) === */}
      <div className="relative z-10 mt-20 pb-16">
        <div className="container mx-auto flex flex-col items-center space-y-8 text-white text-center">
          {/* Monogram */}
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <span className="font-semibold text-lg text-[#0F172A]">JG</span>
          </div>

          {/* Tagline */}
          <p className="max-w-lg text-base">
            Living, learning &amp; leveling up one day at a time.
          </p>

          {/* Social icons (white, spaced) */}
          <div className="flex space-x-6">
            <Link
              href="https://github.com/JunaidGool"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-white hover:opacity-80" />
            </Link>
            <Link
              href="https://linkedin.com/in/JunaidGool"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-white hover:opacity-80" />
            </Link>
            <Link
              href="https://twitter.com/JunaidGool"
              target="_blank"
              aria-label="X/Twitter"
            >
              <XIcon className="h-6 w-6 text-white hover:opacity-80" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} junaidgool.com
          </p>
        </div>
      </div>
    </footer>
  );
}
