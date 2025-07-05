/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}"],
  safelist: ["text-brand-text"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: { 500: "#2563EB", 600: "#1D4ED8", 700: "#1E40AF" },
          accent:  { 500: "#14B8A6", 600: "#0D9488" },
          highlight: "#FBBF24",
          text: "#0F172A",
          bg:   "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
