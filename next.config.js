/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bindusphotographybucket.s3.eu-north-1.amazonaws.com',
        pathname: '/homepage/**',
      },
      {
        protocol: 'https',
        hostname: 'bindusphotographybucket.s3.amazonaws.com',
        pathname: '/background-Images/**',
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
