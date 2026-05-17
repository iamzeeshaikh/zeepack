import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-[var(--color-ink)] text-white shadow-[0_12px_32px_rgba(17,17,17,0.22)] hover:-translate-y-0.5 hover:bg-[var(--color-ink-soft)]",
  secondary:
    "bg-[var(--color-cta)] text-white shadow-[0_14px_32px_rgba(232,96,58,0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]",
  ghost:
    "border border-[var(--color-border)] bg-white/80 text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[rgba(17,17,17,0.18)] hover:bg-white hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-ink)] shadow-[0_14px_32px_rgba(198,169,114,0.30)] hover:-translate-y-0.5 hover:brightness-105",
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  href,
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
