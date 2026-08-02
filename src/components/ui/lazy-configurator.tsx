"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const PackagingConfigurator = dynamic(
  () => import("./packaging-configurator").then((m) => m.PackagingConfigurator),
  { ssr: false },
);

/**
 * The configurator sits about halfway down the product page, so its bundle has
 * no business competing with first paint. It loads when the visitor gets close.
 */
export function LazyConfigurator() {
  const anchor = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = anchor.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reserve the height the tool will take so nothing shifts when it arrives.
  return <div ref={anchor} className="min-h-[540px]">{show ? <PackagingConfigurator /> : null}</div>;
}
