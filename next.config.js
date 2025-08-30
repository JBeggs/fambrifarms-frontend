/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'fambrifarms.co.za', pathname: '/**' },
      { protocol: 'http', hostname: 'fambrifarms.co.za', pathname: '/**' },
      { protocol: 'https', hostname: 'www.fambrifarms.co.za', pathname: '/**' },
      { protocol: 'http', hostname: 'www.fambrifarms.co.za', pathname: '/**' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://fambridevops.pythonanywhere.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 