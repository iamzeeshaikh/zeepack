import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/request-a-quote", destination: "/quote", permanent: true },
      { source: "/products/luxury-rigid-boxes", destination: "/products/rigid-boxes", permanent: true },
      { source: "/products/candle-packaging", destination: "/products/candle-boxes", permanent: true },
      { source: "/products/cosmetic-packaging", destination: "/products/cosmetic-boxes", permanent: true },
      { source: "/products/jewelry-packaging", destination: "/products/jewelry-boxes", permanent: true },
      { source: "/products/custom-inserts", destination: "/products/inserts", permanent: true },
      { source: "/industries/cosmetic-packaging", destination: "/industries/cosmetics", permanent: true },
      { source: "/industries/candle-packaging", destination: "/industries/candles", permanent: true },
      { source: "/industries/jewelry-packaging", destination: "/industries/jewelry", permanent: true },
      { source: "/industries/fashion-packaging", destination: "/industries/fashion", permanent: true },
      { source: "/industries/food-packaging", destination: "/industries/food", permanent: true },
      { source: "/industries/ecommerce-packaging", destination: "/industries/ecommerce", permanent: true },
    ];
  },
};

export default nextConfig;
