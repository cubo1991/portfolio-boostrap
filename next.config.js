const withImages = require('next-images');

const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withImages(nextConfig);
