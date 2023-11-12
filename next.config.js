/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
      },
    ],
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

const path = require("path");
