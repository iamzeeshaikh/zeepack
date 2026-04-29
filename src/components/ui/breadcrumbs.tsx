import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 ? <ChevronRight className="size-4" /> : null}
            {item.href ? (
              <Link href={item.href} className="transition hover:text-[var(--color-accent)]">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[var(--color-ink)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
