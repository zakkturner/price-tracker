const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['c1.neweggimages.com']
  }
}

module.exports = withSvgr(nextConfig)