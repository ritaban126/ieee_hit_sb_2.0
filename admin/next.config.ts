import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }, // jo bhi actual domain ho
    ],
  },
};

export default nextConfig;
