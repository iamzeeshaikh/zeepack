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
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-taupe)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.04em] text-[var(--color-primary)] sm:text-5xl md:text-[3.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
