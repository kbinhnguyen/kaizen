/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  // assetPrefix: './', // comment out for AWS S3
}

module.exports = nextConfig
