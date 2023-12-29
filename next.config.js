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
};

module.exports = nextConfig;
