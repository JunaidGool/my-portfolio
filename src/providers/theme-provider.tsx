"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      // switch off system detection so it never adds `class="dark"`
      defaultTheme="light"
      enableSystem={false}
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
