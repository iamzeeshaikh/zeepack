import type { Metadata } from "next";
import Link from "next/link";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  createMetadata,
} from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zeepack.co"),
  applicationName: "ZEEPACK",
  ...createMetadata({
    title: "ZEEPACK | Premium Custom Packaging For Modern Brands",
    description:
      "Premium custom packaging for modern brands across retail, gifting, and e-commerce, with a focus on structure, materials, finishing, and refined presentation.",
    keywords: [
      "premium custom packaging",
      "luxury packaging boxes",
      "custom rigid boxes",
      "mailer boxes",
      "cosmetic packaging",
      "retail packaging",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(17,17,17,0.08)] bg-white/96 p-3 shadow-[0_-18px_36px_rgba(17,17,17,0.08)] backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-7xl gap-3 px-2">
            <a
              href="tel:+15033580443"
              className="flex-1 rounded-full border border-[rgba(17,17,17,0.08)] bg-[var(--color-shell)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-primary)]"
            >
              Call Now
            </a>
            <Link
              href="/quote"
              className="flex-1 rounded-full bg-[var(--color-gold)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-primary)] shadow-[0_18px_30px_rgba(198,169,114,0.24)]"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
