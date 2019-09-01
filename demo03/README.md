## Demo03 使用 `chunkhash`

**`webpack` 配置文件中将 `[hash]` 替换为 `[chunkhash]`**

```js
// webpack.config.js
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    },
  },
};
```

**打包结果 Output**

> 见 dist 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
        index_201f4e93.js  168 bytes       0  [emitted]  index
runtime~index_2f124e9a.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_07bff0e7.js   69.7 KiB       2  [emitted]  vendors~index
```

打包后3个文件都带有不同的 `hash` 值。
