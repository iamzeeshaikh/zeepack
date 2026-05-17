import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

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
  verification: {
    google: "EfvJft8c2Dnd7TqDIIr-320Wyq2HMQDJ606bEFEv6r0",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
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
      <head>
        <Script id="zendesk-chat" strategy="afterInteractive">
          {`
            window.$zopim||(function(d,s){var z=$zopim=function(c){
            z._.push(c)},$=z.s=
            d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
            _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
            $.src='https://v2.zopim.com/?4h3lbyJihoT1mCOqDA0VoQOaVQE9qTOP';z.t=+new Date;$.
            type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
          `}
        </Script>
      </head>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(17,17,17,0.08)] bg-white/97 p-3 shadow-[0_-16px_32px_rgba(17,17,17,0.09)] backdrop-blur-xl sm:hidden">
          <div className="mx-auto flex max-w-7xl gap-3 px-2">
            <a
              href="tel:+15033580443"
              className="flex-1 rounded-full border border-[rgba(17,17,17,0.09)] bg-[var(--color-shell)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-primary)]"
            >
              Call Now
            </a>
            <Link
              href="/quote"
              className="flex-1 rounded-full bg-[var(--color-cta)] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_28px_rgba(232,96,58,0.28)]"
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
