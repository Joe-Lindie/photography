/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bindusphotographybucket.s3.eu-north-1.amazonaws.com',
        pathname: '/homepage/**',
      },
    ],
  },
};

module.exports = nextConfig;
