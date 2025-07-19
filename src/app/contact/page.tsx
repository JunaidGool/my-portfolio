// src/app/contact/page.tsx

"use client";

import Image from "next/image";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center bg-white overflow-hidden">
      {/* Watermark background, gently positioned */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-5">
        <Image
          src="/brand/logo_JG_Contact.png"
          alt="JG watermark"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Content block */}
      <div className="relative z-10 max-w-xl space-y-8">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-primary-600">
          Say Hello{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          I’m always open to collaborations, sharing product ideas, or chatting
          about real-world tech solutions. Let’s connect!
        </p>

        {/* Contact links */}
        <ul className="space-y-4 text-sm md:text-base text-gray-700">
          <li className="flex items-center justify-center gap-3">
            <Mail className="h-5 w-5 text-brand-primary-500" />
            <a
              href="mailto:hello@junaidgool.com"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary-400"
            >
              hello@junaidgool.com
            </a>
          </li>

          <li className="flex items-center justify-center gap-3">
            <Github className="h-5 w-5 text-brand-primary-500" />
            <a
              href="https://github.com/JunaidGool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary-400"
            >
              github.com/JunaidGool
            </a>
          </li>

          <li className="flex items-center justify-center gap-3">
            <Linkedin className="h-5 w-5 text-brand-primary-500" />
            <a
              href="https://linkedin.com/in/junaidgool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary-400"
            >
              linkedin.com/in/junaidgool
            </a>
          </li>

          <li className="flex items-center justify-center gap-3">
            <MessageCircle className="h-5 w-5 text-brand-primary-500" />
            <a
              href="https://wa.me/27712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary-400"
            >
              Chat on WhatsApp
            </a>
          </li>
        </ul>

        {/* Soft footer CTA */}
        <p className="pt-8 text-sm text-gray-400">
          Open to freelance, mentorship, and good conversations—reach out
          anytime.
        </p>
      </div>
    </main>
  );
}
