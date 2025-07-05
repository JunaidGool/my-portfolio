// src/app/contact/page.tsx
import React from "react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Get in touch</h1>

      <p className="max-w-md">
        Email me at{" "}
        <a
          className="text-blue-600 underline"
          href="mailto:hello@junaidgool.com"
        >
          hello@junaidgool.com
        </a>
        , or find me on&nbsp;
        <a
          className="text-blue-600 underline"
          href="https://github.com/JunaidGool"
        >
          GitHub
        </a>
        .
      </p>
    </main>
  );
}
