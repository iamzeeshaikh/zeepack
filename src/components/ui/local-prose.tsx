import Link from "next/link";

import { parseLocalParagraph } from "@/lib/local-links";

/**
 * Renders one paragraph of city content, turning [anchor](/path) into a real
 * link. The parser enforces the linking rules and throws at build time, so an
 * over-linked or mis-targeted paragraph never ships.
 */
export function LocalProse({
  text,
  context,
  className,
}: {
  text: string;
  context: string;
  className?: string;
}) {
  const nodes = parseLocalParagraph(text, context);

  return (
    <p className={className}>
      {nodes.map((node, index) =>
        "href" in node ? (
          <Link
            key={index}
            href={node.href}
            className="font-semibold text-[var(--color-primary)] underline decoration-[rgba(198,169,114,0.5)] underline-offset-4"
          >
            {node.text}
          </Link>
        ) : (
          <span key={index}>{node.text}</span>
        ),
      )}
    </p>
  );
}
