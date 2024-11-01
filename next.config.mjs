/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "i.scdn.co",
    ],
  },
};

module.exports = nextConfig;
