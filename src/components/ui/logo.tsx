import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  theme?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

export function Logo({
  href = "/",
  theme = "light",
  compact = false,
  className,
}: LogoProps) {
  const dark = theme === "dark";

  return (
    <Link
      href={href}
      aria-label="The Cereal Boxes home"
      className={cn("inline-flex items-center gap-3", className)}
    >
      <div
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-2xl border",
          compact ? "h-10 w-10" : "h-12 w-12",
          dark
            ? "border-white/15 bg-white/8"
            : "border-[rgba(21,36,58,0.08)] bg-[linear-gradient(180deg,#fff5d1,#f7d66f)]",
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_48%)]" />
        <div className="relative grid place-items-center rounded-xl bg-[var(--color-ink)] text-[var(--color-gold-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span className={cn("font-display font-bold leading-none", compact ? "text-base" : "text-lg")}>
            CB
          </span>
        </div>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-body text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
            dark ? "text-white/68" : "text-[var(--color-muted)]",
          )}
        >
          Premium Packaging
        </span>
        <span
          className={cn(
            "font-display text-[1.28rem] font-semibold tracking-[-0.03em]",
            compact && "text-[1.06rem]",
            dark ? "text-white" : "text-[var(--color-ink)]",
          )}
        >
          The Cereal Boxes
        </span>
      </div>
    </Link>
  );
}
