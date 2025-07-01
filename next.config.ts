import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"], // <- This is the correct domain for image URLs from Pexels
  },
};

export default nextConfig;
