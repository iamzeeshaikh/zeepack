import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | ZEEPACK",
  description: "ZEEPACK privacy policy — how we collect, use, and protect your personal information when you use our website or submit a packaging inquiry.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space">
      <Container className="surface-card max-w-4xl p-7 sm:p-9">
        <h1 className="text-5xl text-[var(--color-ink)]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated: May 2026</p>

        <div className="mt-8 grid gap-8 text-base leading-8 text-[var(--color-muted)]">

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">1. Who We Are</h2>
            <p className="mt-2">
              ZEEPACK (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
              <strong className="text-[var(--color-ink)]">zeepack.co</strong> and provides
              custom packaging products and services to businesses across the United States and
              internationally. Our contact email is{" "}
              <a href="mailto:Info@zeepack.co" className="text-[var(--color-primary)] underline underline-offset-4">
                Info@zeepack.co
              </a>{" "}
              and our phone number is{" "}
              <a href="tel:+15033580443" className="text-[var(--color-primary)] underline underline-offset-4">
                (503) 358-0443
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">2. Information We Collect</h2>
            <p className="mt-2">We collect information in the following ways:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[var(--color-ink)]">Information you provide directly</strong> — name,
                email address, phone number, company name, shipping address, project specifications,
                quantities, and any files or artwork you submit through quote or contact forms.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Usage data</strong> — browser type,
                pages visited, time spent on pages, and referring URLs collected automatically
                when you browse our website.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Cookies</strong> — small data files
                stored on your device to remember preferences and improve site performance.
                You can disable cookies in your browser settings.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">3. How We Use Your Information</h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to quote requests, inquiries, and customer service questions</li>
              <li>Prepare and deliver custom packaging orders</li>
              <li>Send order confirmations, tracking updates, and production status communications</li>
              <li>Improve our website, products, and service quality</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Send occasional marketing communications (you may opt out at any time)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">4. How We Share Your Information</h2>
            <p className="mt-2">
              We do <strong className="text-[var(--color-ink)]">not sell</strong> your personal information.
              We may share data with trusted third parties only as necessary:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[var(--color-ink)]">Shipping carriers</strong> — to fulfill and
                track deliveries (name and address only)
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Email and communication service providers</strong> — to
                send transactional and marketing emails on our behalf
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Analytics providers</strong> — to understand
                website usage and improve content (data is aggregated and anonymized)
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Legal authorities</strong> — if required
                by law, court order, or to protect the rights and safety of ZEEPACK or others
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">5. Data Retention</h2>
            <p className="mt-2">
              We retain your information for as long as necessary to fulfill the purposes described
              in this policy, including maintaining business and accounting records, unless a longer
              retention period is required by law. Quote and order records are typically retained for
              a minimum of <strong className="text-[var(--color-ink)]">3 years</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">6. Your Rights</h2>
            <p className="mt-2">Depending on your location, you may have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:Info@zeepack.co" className="text-[var(--color-primary)] underline underline-offset-4">
                Info@zeepack.co
              </a>.
              We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">7. Security</h2>
            <p className="mt-2">
              We implement reasonable technical and organizational measures to protect your information
              from unauthorized access, loss, or disclosure. However, no method of transmission over
              the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">8. Third-Party Links</h2>
            <p className="mt-2">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review the privacy
              policy of any external site you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">9. Children&rsquo;s Privacy</h2>
            <p className="mt-2">
              Our website and services are intended for business use and are not directed at children
              under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">10. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with a revised &ldquo;Last updated&rdquo; date. Continued use of our website after
              changes are posted constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">11. Contact</h2>
            <p className="mt-2">
              For privacy-related questions, requests, or concerns, contact us at:{" "}
              <a href="mailto:Info@zeepack.co" className="text-[var(--color-primary)] underline underline-offset-4">
                Info@zeepack.co
              </a>{" "}
              or call{" "}
              <a href="tel:+15033580443" className="text-[var(--color-primary)] underline underline-offset-4">
                (503) 358-0443
              </a>.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
