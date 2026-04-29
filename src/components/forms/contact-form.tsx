"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { submitFormRequest } from "@/lib/form-client";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitFormRequest("contact", form);
      router.push("/thank-you/?form=contact");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send your message.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
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
          placeholder="Company"
          value={form.company}
          onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
        />
      </div>
      <textarea
        className="input-shell mt-4 min-h-36 resize-none"
        placeholder="Tell us about your packaging project"
        value={form.message}
        onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
        required
      />
      {error ? <p className="mt-3 text-sm text-[var(--color-accent)]">{error}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
