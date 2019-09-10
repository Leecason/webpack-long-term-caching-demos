const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    index2: './src/index2.js',
  },
  output: {
    // path: path.join(__dirname, 'dist1'),
    path: path.join(__dirname, 'dist2'), // add second entry
    filename: '[name]_[contenthash:8].js',
    chunkFilename: '[name]_[contenthash:8].js',
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
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name;
      }
      return Array.from(chunk.modulesIterable, m => m.id).join("_");
    }),
  ],
};
