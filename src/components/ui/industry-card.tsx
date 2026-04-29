import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type IndustryCardProps = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export function IndustryCard({
  name,
  description,
  image,
  href,
}: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-[rgba(17,17,17,0.08)] bg-white/86 shadow-[0_10px_22px_rgba(17,17,17,0.045),0_24px_60px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(17,17,17,0.06),0_34px_72px_rgba(17,17,17,0.1)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden border-b border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(248,245,239,0.72),rgba(238,230,218,0.96))]">
        <Image
          src={image}
          alt={`${name} packaging`}
          fill
          unoptimized
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.035em] text-[var(--color-primary)]">
          {name}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
          View industry
          <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
