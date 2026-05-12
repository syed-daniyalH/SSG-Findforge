/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },

       // SSGMindForge CDN Images
      {
        protocol: 'https',
        hostname:
          'pub-97d6482ef9c641e0bedb3123f8ca0b9d.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;