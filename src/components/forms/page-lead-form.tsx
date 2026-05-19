"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { submitFormRequest } from "@/lib/form-client";

type Props = {
  context?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

const initialState = { name: "", email: "", phone: "" };

export function PageLeadForm({
  context = "",
  eyebrow = "Free Quote",
  title = "Get a Custom Packaging Quote",
  description = "Share your details and we'll respond within 24 hours with pricing and options.",
}: Props) {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function set(field: keyof typeof initialState) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await submitFormRequest("lead", { ...form, productType: context });
      router.push("/thank-you/?form=lead");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[var(--color-primary)] px-8 py-12 sm:px-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-80 lg:shrink-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(255,255,255,0.55)]">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1">
            <div className="grid gap-3 sm:grid-cols-3">
              <input
                className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.07)] px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.35)] outline-none transition focus:border-[var(--color-taupe)] focus:bg-[rgba(255,255,255,0.1)]"
                placeholder="Your Name"
                value={form.name}
                onChange={set("name")}
                required
              />
              <input
                type="email"
                className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.07)] px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.35)] outline-none transition focus:border-[var(--color-taupe)] focus:bg-[rgba(255,255,255,0.1)]"
                placeholder="Email Address"
                value={form.email}
                onChange={set("email")}
                required
              />
              <input
                className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.07)] px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.35)] outline-none transition focus:border-[var(--color-taupe)] focus:bg-[rgba(255,255,255,0.1)]"
                placeholder="Phone Number"
                value={form.phone}
                onChange={set("phone")}
              />
            </div>
            {error ? (
              <p className="mt-2 text-sm text-[var(--color-cta)]">{error}</p>
            ) : null}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(232,96,58,0.32)] transition hover:opacity-90 disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Request a Quote"}
              </button>
              <p className="text-[12px] text-[rgba(255,255,255,0.35)]">
                No spam. We respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
