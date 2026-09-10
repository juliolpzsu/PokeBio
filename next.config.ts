import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Las laminas oficiales viven en el repositorio de sprites de PokeAPI.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/**",
      },
    ],
  },
};

export default nextConfig;
