/** @type {import('next').NextConfig} */

const protocol = 'https';
const hostname = 'storage.googleapis.com';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/bindus_photography/background/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/bindus_photography/featured/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/bindus_photography/japan/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/bindus_photography/korea/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/bindus_photography/scotland/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/bindus_photography/singapore/**',
      },
    ],
  },
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
  },
};

module.exports = nextConfig;
