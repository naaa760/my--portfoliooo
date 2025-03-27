/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Optimize webpack performance
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    };

    // Reduce bundle size by limiting chunk size
    config.optimization.splitChunks = {
      chunks: "all",
      maxInitialRequests: 25,
      minSize: 20000,
    };

    // Improve build performance
    if (!isServer) {
      config.optimization.runtimeChunk = "single";
    }

    return config;
  },

  // Disable image optimization during development if needed
  images: {
    unoptimized: process.env.NODE_ENV !== "production",
    // Limit number of simultaneous image optimizations
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Improve performance by disabling unused features
  poweredByHeader: false,
  reactStrictMode: true,

  // Reduce build time by excluding certain paths from the build
  excludeDefaultMomentLocales: true,
};

module.exports = nextConfig;
