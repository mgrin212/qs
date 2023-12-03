/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'seeklogo.com',
        pathname: '/*/**',
      },
    ],
  },
}

module.exports = nextConfig
