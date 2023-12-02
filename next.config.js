/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bindusphotographybucket.s3.amazonaws.com',
        pathname: '/featured/**',
      },
      {
        protocol: 'https',
        hostname: 'bindusphotographybucket.s3.amazonaws.com',
        pathname: '/background/**',
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
