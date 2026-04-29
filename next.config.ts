import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/quote", destination: "/request-a-quote/", permanent: true },
      { source: "/products", destination: "/cereal-boxes/", permanent: true },
      { source: "/industries", destination: "/industries-uses/", permanent: true },
      { source: "/sustainability", destination: "/materials-finishes/", permanent: true },
      { source: "/customize-cereal-boxes", destination: "/personalized-cereal-boxes/", permanent: true },
      { source: "/little-cereal-boxes", destination: "/small-cereal-boxes/", permanent: true },
    ];
  },
};

export default nextConfig;
