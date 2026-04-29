import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | ZEEPACK",
  description: "Read the privacy policy for the ZEEPACK website and inquiry forms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" />;
}

function LegalPage({ title }: { title: string }) {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">{title}</h1>
        <div className="mt-6 grid gap-4 text-base leading-8 text-[var(--color-muted)]">
          <p>We collect information you submit through contact and quote forms so we can respond to your packaging inquiries and improve service delivery.</p>
          <p>Information may include your name, email, phone number, company name, project specifications, and any files you upload through the quote form.</p>
          <p>We do not sell your personal data. Information is used to respond to inquiries, provide quotes, manage customer communication, and maintain business records.</p>
          <p>If you need information updated or removed, contact us at Info@zeepack.co.</p>
        </div>
      </Container>
    </section>
  );
}
