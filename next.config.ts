import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "cdn.pexels.com", "pixabay.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
