"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { submitFormRequest } from "@/lib/form-client";

const initialState = {
  name: "",
  email: "",
  phone: "",
  productType: "",
  message: "",
};

export function LeadForm({ title = "Start Your Packaging Project" }: { title?: string }) {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitFormRequest("lead", form);
      router.push("/thank-you/?form=lead");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
        Quick Inquiry
      </p>
      <h3 className="mt-3 font-display text-3xl text-[var(--color-ink)]">{title}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          className="input-shell"
          placeholder="Name"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          required
        />
        <input
          type="email"
          className="input-shell"
          placeholder="Email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          required
        />
        <input
          className="input-shell"
          placeholder="Phone"
          value={form.phone}
          onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
        />
        <input
          className="input-shell"
          placeholder="Product interested in"
          value={form.productType}
          onChange={(event) =>
            setForm((current) => ({ ...current, productType: event.target.value }))
          }
        />
      </div>
      <textarea
        className="input-shell mt-4 min-h-28 resize-none"
        placeholder="Tell us what you need"
        value={form.message}
        onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
      />
      {error ? <p className="mt-3 text-sm text-[var(--color-accent)]">{error}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(232,96,58,0.24)] transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Get Custom Quote"}
      </button>
    </form>
  );
}
