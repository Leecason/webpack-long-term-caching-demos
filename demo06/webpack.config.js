const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    // path: path.join(__dirname, 'dist1'),
    path: path.join(__dirname, 'dist2'), // change css content
    filename: '[name]_[chunkhash:8].js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
        },
      ],
    }],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
  ],
};
