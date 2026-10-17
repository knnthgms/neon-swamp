import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static HTML in out/, served directly by Cloudflare Pages. No adapter needed.
  output: "export",
  experimental: {
    // The stylesheet is ~6 KB; inlining it removes the only render-blocking request.
    inlineCss: true,
  },
};

export default nextConfig;
