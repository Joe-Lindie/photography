/** @type {import('next').NextConfig} */

const protocol = 'https';
const hostname = 'bindusphotographybucket.s3.amazonaws.com';
const hostname2 = 'storage.googleapis.com';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol,
        hostname: hostname2,
        pathname: '/bindus_photography/background/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/featured/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/scotland/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/korea/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/japan/**',
      },
      {
        protocol: protocol,
        hostname: hostname,
        pathname: '/singapore/**',
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
