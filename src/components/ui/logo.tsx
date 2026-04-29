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
  const isDark = theme === "dark";

  return (
    <Link
      href={href}
      aria-label="ZEEPACK home"
      className={cn("inline-flex items-center", className)}
    >
      <div className="inline-flex items-center gap-1.5">
        <div
          className={cn(
            "relative inline-flex items-center justify-center overflow-hidden rounded-[15px] border shadow-[0_14px_28px_rgba(17,17,17,0.06)]",
            compact ? "h-10 w-10" : "h-11 w-11",
            isDark
              ? "border-white/12 bg-white/[0.06]"
              : "border-[rgba(17,17,17,0.07)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,230,218,0.92))]",
          )}
        >
          <div
            className={cn(
              "absolute inset-0",
              isDark
                ? "bg-[radial-gradient(circle_at_30%_22%,rgba(198,169,114,0.18),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]"
                : "bg-[radial-gradient(circle_at_30%_22%,rgba(198,169,114,0.12),transparent_44%)]",
            )}
          />

          <svg
            viewBox="0 0 56 56"
            aria-hidden="true"
            className={cn("relative", compact ? "h-6 w-6" : "h-6.5 w-6.5")}
            fill="none"
          >
            <path
              d="M16 15.5H40L20.5 40H39.5"
              stroke={isDark ? "#F8F5EF" : "#111111"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 15.5H40"
              stroke="#C6A972"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M21 40H39.5"
              stroke="#C6A972"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M33.5 21V31"
              stroke="#C6A972"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.82"
            />
          </svg>
        </div>

        <div className="flex flex-col items-start justify-center">
          <span
            className={cn(
              "font-display text-[1.16rem] font-bold uppercase italic leading-none tracking-[0.18em]",
              compact && "text-[0.98rem]",
              isDark ? "text-white" : "text-[var(--color-primary)]",
            )}
          >
            ZEE
          </span>
          <span
            className={cn(
              "-mt-0.5 font-display text-[1.16rem] font-bold uppercase italic leading-none tracking-[0.18em]",
              compact && "text-[0.98rem]",
              isDark ? "text-white" : "text-[var(--color-primary)]",
            )}
          >
            PACK
          </span>
        </div>
      </div>
    </Link>
  );
}
