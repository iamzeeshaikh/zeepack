import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="surface-card h-full rounded-[16px] p-6 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(17,17,17,0.06),0_34px_72px_rgba(17,17,17,0.1)]">
      <div className="inline-flex rounded-[14px] bg-[var(--color-surface)] p-3 text-[var(--color-gold)]">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[var(--color-primary)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}
