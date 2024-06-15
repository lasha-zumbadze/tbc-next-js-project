/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "7cskdstpo9f2du9d.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
