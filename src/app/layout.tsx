import type { Metadata } from "next";
import Link from "next/link";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { buildLocalBusinessSchema, buildOrganizationSchema, createMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thecerealboxes.com"),
  applicationName: "The Cereal Boxes",
  ...createMetadata({
    title: "The Cereal Boxes | Premium Custom Cereal Boxes In The USA",
    description:
      "Premium custom cereal boxes, printed cereal packaging, cereal mylar bags, and wholesale cereal box solutions for brands across the USA.",
    keywords: [
      "custom cereal boxes",
      "cereal boxes",
      "custom printed cereal boxes",
      "wholesale cereal boxes",
      "cereal mylar bags",
      "cereal packaging",
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

  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(21,36,58,0.08)] bg-white/96 p-3 shadow-[0_-18px_36px_rgba(21,36,58,0.08)] backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-7xl gap-3 px-2">
            <a
              href="tel:+15033580443"
              className="flex-1 rounded-full border border-[rgba(21,36,58,0.08)] bg-[var(--color-shell)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-ink)]"
            >
              Call Now
            </a>
            <Link
              href="/request-a-quote/"
              className="flex-1 rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_30px_rgba(232,96,58,0.28)]"
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
      </body>
    </html>
  );
}
