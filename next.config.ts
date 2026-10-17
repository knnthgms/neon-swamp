import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The stylesheet is ~6 KB; inlining it removes the only render-blocking request.
    inlineCss: true,
  },
};

export default nextConfig;
