/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  // Scan all source files (added .css so globals.css picks up utilities)
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}"],

  // Keep any utilities you reference only in Markdown/MDX
  safelist: ["text-brand-text"],

  theme: {
    extend: {
      /* ───────────────────────────────────────────────
         Brand palette (unchanged – brought forward)
         ───────────────────────────────────────────── */
      colors: {
        brand: {
          primary: { 500: "#2563EB", 600: "#1D4ED8", 700: "#1E40AF" },
          accent:  { 500: "#14B8A6", 600: "#0D9488" },
          highlight: "#FBBF24",
          text: "#0F172A",
          bg:   "#F8FAFC",
        },
      },

      /* ───────────────────────────────────────────────
         Fluid type-scale & spacing (maps CSS vars)
         ───────────────────────────────────────────── */
      fontSize: {
        "step--2": "var(--step--2)",
        "step--1": "var(--step--1)",
        "step-0":  "var(--step-0)",
        "step-1":  "var(--step-1)",
        "step-2":  "var(--step-2)",
        "step-3":  "var(--step-3)",
        "step-4":  "var(--step-4)",
        "step-5":  "var(--step-5)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
      },

      /* ───────────────────────────────────────────────
         Extra breakpoint for very small devices
         ───────────────────────────────────────────── */
      screens: {
        xs: "375px",
        // md, lg, etc. inherit from Tailwind defaults
      },
    },
  },

  plugins: [],
};
