const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    // path: path.join(__dirname, 'dist1'),
    path: path.join(__dirname, 'dist2'), // add b.js
    filename: '[name]_[chunkhash:8].js',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    },
  },
};
