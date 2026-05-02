import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    localPatterns: [
      {
        pathname: '/imgs/**',
        // search is omitted, so ?v=2, ?t=timestamp, or no query string are all allowed
      },
    ],
  },
};

export default nextConfig;
