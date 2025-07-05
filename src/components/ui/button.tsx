"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// Button style variants (colour + size) powered by class-variance-authority
// -----------------------------------------------------------------------------
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium " +
    "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 " +
    "disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      // ------- brand colour variants -------
      variant: {
        default: "bg-brand-primary-500 text-white hover:bg-brand-primary-600",
        secondary: "bg-brand-accent-500 text-white hover:bg-brand-accent-600",
        outline:
          "border border-brand-primary-500 text-brand-primary-500 " +
          "hover:bg-brand-primary-500 hover:text-white",
      },
      // ------- size variants (restored) -------
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// -----------------------------------------------------------------------------
// Button component definition
// -----------------------------------------------------------------------------
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * When true, renders the button as a child component (Radix Slot),
   * letting you pass any element (e.g., <Link>) while keeping styles.
   */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
