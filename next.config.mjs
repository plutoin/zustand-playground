/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
