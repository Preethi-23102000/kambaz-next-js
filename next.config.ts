import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    //Skip ESLint checks during Vercel builds
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
