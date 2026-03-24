/** @type {import('next').NextConfig} */
const basePath = '/immense-app-website';

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
