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

        {/* WhatsApp floating button */}
        <a
          href="https://api.whatsapp.com/send/?phone=15033580443&text=Hi+ZEEPACK!+I+need+more+info+about+custom+packaging.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with ZEEPACK on WhatsApp"
          className="fixed bottom-24 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-110 sm:bottom-8"
        >
          <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.736 5.486 2.027 7.793L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.77-1.853l-.485-.288-5.003 1.194 1.24-4.868-.317-.5A13.265 13.265 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.2-2.355-1.162-2.72-1.294-.365-.133-.63-.2-.896.2-.266.398-1.03 1.294-1.263 1.56-.232.265-.465.298-.863.1-.398-.2-1.68-.619-3.2-1.975-1.183-1.055-1.98-2.357-2.213-2.756-.232-.398-.025-.613.175-.812.18-.179.398-.465.598-.698.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.698-.1-.2-.896-2.16-1.228-2.956-.323-.774-.65-.669-.896-.682l-.764-.013c-.266 0-.697.1-1.062.498-.365.398-1.394 1.362-1.394 3.32s1.427 3.852 1.626 4.117c.2.265 2.808 4.285 6.803 6.01.951.41 1.693.655 2.272.838.954.303 1.823.26 2.51.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.099-.166-.365-.265-.763-.465z"/>
          </svg>
        </a>

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
