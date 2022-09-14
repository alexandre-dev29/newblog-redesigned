/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "devprojectbucket.s3.amazonaws.com", "cdn.sanity.io", "nextui.org"],
  },
};

module.exports = nextConfig;
