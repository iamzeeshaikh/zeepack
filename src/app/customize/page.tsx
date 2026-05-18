import { PackagingConfigurator } from "@/components/ui/packaging-configurator";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Customize Your Packaging | Interactive Configurator | ZEEPACK",
  description:
    "Configure your custom packaging online. Choose box type, size, material, finish options, quantity, and add-ons. Get an instant quote from ZEEPACK — no page reload needed.",
  path: "/customize",
  keywords: [
    "custom packaging configurator",
    "packaging quote tool",
    "design your box",
    "custom box builder",
    "packaging options",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Customize", path: "/customize" },
]);

export default function CustomizePage() {
  return (
    <>
      <div className="border-b border-[rgba(17,17,17,0.07)] bg-white py-10 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-taupe)]">
          Interactive Configurator
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
          Customize Your Packaging
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          Choose your packaging options below and receive a live summary with your selections. Submit
          directly — no page reload, no redirects.
        </p>
      </div>

      <PackagingConfigurator />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
