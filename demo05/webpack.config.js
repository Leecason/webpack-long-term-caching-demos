const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    // path: path.join(__dirname, 'dist1'), // without b
    path: path.join(__dirname, 'dist2'), // with b
    filename: '[name]_[chunkhash:8].js',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    },
  },
};
