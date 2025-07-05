/* src/components/Footer.tsx */
"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      {/* ––– Top row ––– */}
      <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-3">
        {/* About */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Junaid Gool
          </h3>
          <p className="text-sm leading-relaxed">
            Micro-SaaS that moves money &amp; moves the needle. <br />
            Secure. Scalable. Demo-ready.
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-primary-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-brand-primary-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-primary-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Connect
          </h3>
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/JunaidGool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-brand-primary-600 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn – blue circle with white "in" */}
            <a
              href="https://www.linkedin.com/in/junaidgool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:opacity-90"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* blue circle */}
                <circle cx="12" cy="12" r="12" fill="#2563EB" />
                {/* white "in" glyph */}
                <path
                  d="M6.27 9h2.46v7.97H6.27V9Zm1.23-3.99a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88ZM10.98 9h2.35v1.09h.03c.33-.63 1.14-1.3 2.35-1.3 2.5 0 2.96 1.62 2.96 3.73v4.45h-2.46v-3.94c0-.94-.02-2.16-1.6-2.16-1.6 0-1.84 1.05-1.84 2.09v4.01h-2.46V9Z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/junaidgool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-brand-primary-600 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.162 0h-5.757l-4.947 7.964L6.62 0H0l8.279 12.617L.214 24h5.757l5.219-8.225L17.58 24h6.305l-8.665-12.857L22.162 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-brand-primary-500/0 via-brand-primary-500 to-brand-primary-500/0" />

      {/* ––– Bottom bar ––– */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6 text-sm">
        <span>© {year} Junaid Gool. All rights reserved.</span>
        <a href="#" className="text-brand-primary-600 hover:underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
