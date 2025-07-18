import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ disables domain restrictions
  },
};

export default nextConfig;
