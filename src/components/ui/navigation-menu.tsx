/* ───────── src/components/ui/brand-navigation.tsx ───────── */
"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ——————————————————————————————————
   Root
   – brand gradient (primary → accent)
   – pill corners, blur, shadow
   —————————————————————————————————— */
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        // ↓↓↓ gradient pulled straight from the footer ↓↓↓
        "relative flex max-w-max flex-1 items-center justify-center",
        "rounded-full bg-gradient-to-r",
        "from-brand-primary-500 via-brand-primary-600 to-brand-accent-500",
        "px-5 py-2.5 shadow-lg backdrop-blur-md",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

/* ——————————————————————————————————
   List & Item wrappers (unchanged)
   —————————————————————————————————— */
function NavigationMenuList(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.List>
) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className="flex list-none items-center justify-center gap-1"
      {...props}
    />
  );
}
function NavigationMenuItem(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Item>
) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className="relative"
      {...props}
    />
  );
}

/* ——————————————————————————————————
   Trigger style – pill, white text, blue/teal hover
   —————————————————————————————————— */
const navigationMenuTriggerStyle = cva(
  [
    "inline-flex h-9 items-center justify-center rounded-full px-4",
    "text-sm font-medium text-white",
    "transition-colors outline-none",
    "hover:bg-white/10",
    "data-[state=open]:bg-white/15",
    "focus-visible:ring-2 focus-visible:ring-white/50",
  ].join(" ")
);

function NavigationMenuTrigger(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>
) {
  const { className, children, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...rest}
    >
      {children}
      <ChevronDownIcon
        className="ml-1 size-3 transition-transform group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

/* ——————————————————————————————————
   Dropdown popover – dark navy like CTA
   —————————————————————————————————— */
function NavigationMenuContent(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Content>
) {
  const { className, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "top-0 left-0 w-full md:absolute md:w-auto",
        "mt-2 rounded-lg border border-white/10 bg-brand-text shadow-lg",
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        className
      )}
      {...rest}
    />
  );
}

/* ——————————————————————————————————
   Viewport container
   —————————————————————————————————— */
function NavigationMenuViewport(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>
) {
  const { className, ...rest } = props;
  return (
    <div className="absolute left-0 top-full z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center overflow-hidden rounded-lg border border-white/10 bg-brand-text shadow-lg",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...rest}
      />
    </div>
  );
}

/* ——————————————————————————————————
   Plain link inside dropdown
   —————————————————————————————————— */
function NavigationMenuLink(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Link>
) {
  const { className, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex flex-col gap-1 rounded-md p-2 text-sm text-white/90",
        "hover:bg-white/10 hover:text-white",
        "focus-visible:ring-2 focus-visible:ring-white/50 outline-none",
        className
      )}
      {...rest}
    />
  );
}

/* ——————————————————————————————————
   Underline indicator – accent teal
   —————————————————————————————————— */
function NavigationMenuIndicator(
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>
) {
  const { className, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "relative top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        "data-[state=hidden]:animate-out data-[state=visible]:animate-in",
        className
      )}
      {...rest}
    >
      <div className="relative top-[60%] h-2 w-7 rounded-t-full bg-brand-accent-500 shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
