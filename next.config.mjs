/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    THIRD_WEB_CLIENT_ID: "83f1d38b16b67f1f299a3f630bc54bb2",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
