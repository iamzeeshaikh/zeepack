import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-[var(--color-ink)] text-white shadow-[0_18px_45px_rgba(21,36,58,0.18)] hover:-translate-y-0.5 hover:bg-[var(--color-ink-soft)]",
  secondary:
    "bg-[var(--color-accent)] text-white shadow-[0_16px_35px_rgba(232,96,58,0.24)] hover:-translate-y-0.5 hover:brightness-105",
  ghost:
    "border border-[var(--color-border)] bg-white/80 text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white",
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
