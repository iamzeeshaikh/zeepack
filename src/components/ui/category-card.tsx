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
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-white/86 shadow-[0_10px_22px_rgba(17,17,17,0.045),0_24px_60px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08),0_34px_72px_rgba(17,17,17,0.1)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(238,230,218,0.96))]">
        <Image
          src={image}
          alt={`${title} packaging mockup`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.12))] opacity-80 transition duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.32),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0),rgba(17,17,17,0.08))]" />
        {badge ? (
          <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/60 bg-[rgba(255,255,255,0.82)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] shadow-[0_10px_22px_rgba(17,17,17,0.08)] backdrop-blur-sm">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
          View category
          <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
