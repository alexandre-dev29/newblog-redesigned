/** @type {import('next').NextConfig} */
const { withAxiom } = require("next-axiom");
const nextConfig = withAxiom({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "devprojectbucket.s3.amazonaws.com", "cdn.sanity.io", "nextui.org"],
  },
});

module.exports = nextConfig;
