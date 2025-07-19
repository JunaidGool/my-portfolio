"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Plane, PauseCircle } from "lucide-react";

export interface ProductCardProps {
  title: string;
  img: string;
  blurb: string;
  href: string;
  status: "live" | "in-flight" | "on-hold";
}

/* status styles */
const statusStyles = {
  live: {
    label: "live",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    icon: CheckCircle2,
  },
  "in-flight": {
    label: "in flight",
    bg: "bg-sky-50",
    text: "text-sky-700",
    icon: Plane,
  },
  "on-hold": {
    label: "on hold",
    bg: "bg-rose-50",
    text: "text-rose-700",
    icon: PauseCircle,
  },
} as const;

export default function ProductCard({
  title,
  img,
  blurb,
  href,
  status,
}: ProductCardProps) {
  const S = statusStyles[status];

  return (
    <div
      className="
        flex flex-col items-center gap-6 rounded-xl bg-white
        p-12 text-center ring-1 ring-gray-200 transition hover:shadow-lg
      "
    >
      <Image src={img} alt={`${title} logo`} width={72} height={72} />

      <p className="max-w-prose text-step--1 text-brand-text/80 leading-relaxed">
        {blurb}
      </p>

      <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span
          className={`inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm ${S.bg} ${S.text}`}
        >
          <S.icon className="h-4 w-4" /> {S.label}
        </span>

        <Button size="sm" variant="outline" asChild>
          <Link href={href} target="_blank">
            View demo →
          </Link>
        </Button>
      </div>
    </div>
  );
}
