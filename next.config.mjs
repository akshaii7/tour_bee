/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tour_bee',
  assetPrefix: '/tour_bee/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
