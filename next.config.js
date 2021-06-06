const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `${process.env.ADMIN_URL}/:path*`,
        }
      ]
    }
  },  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  future: {
    webpack5: true,
  },
});
