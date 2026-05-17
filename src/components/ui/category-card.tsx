import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  badge?: string;
};

export function CategoryCard({
  title,
  description,
  href,
  image,
  badge,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(17,17,17,0.07)] bg-white shadow-[0_2px_4px_rgba(17,17,17,0.04),0_12px_28px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(17,17,17,0.06),0_28px_60px_rgba(17,17,17,0.10)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[rgba(17,17,17,0.07)] bg-[linear-gradient(160deg,rgba(248,245,239,0.80),rgba(238,230,218,0.96))]">
        <Image
          src={image}
          alt={`${title} packaging`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(17,17,17,0.08),transparent_48%)]" />
        {badge ? (
          <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] shadow-[0_6px_18px_rgba(17,17,17,0.09)] backdrop-blur-sm">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.9rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="mt-3.5 flex-1 text-[0.88rem] leading-[1.85] text-[var(--color-muted)]">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--color-cta)]">
          View category
          <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
