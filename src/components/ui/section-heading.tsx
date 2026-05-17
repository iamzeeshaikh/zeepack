import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <div className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center",
        )}>
          <span className="h-px w-8 bg-[var(--color-gold)] opacity-70" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-[var(--color-taupe)]">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="font-display text-[2.2rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-[2.8rem] md:text-[3.2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[1rem] leading-[1.85] text-[var(--color-muted)] sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
