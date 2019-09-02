## Demo05 稳定 `module id`

**方案1: 使用内置插件 `HashedModuleIdsPlugin`**

```js
// webpack.config.js
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash:8].js',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins：[
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    });
  ],
};
```

**方案2: 使用 `optimization.moduleIds`**

> webpack@4.16.0+

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
    moduleIds: 'hashed',
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

两种方案都会根据模块的相对路径生成一个 `hash` 作为 `module id`，而不是以 `resolving order` 作为 `module id`，这里使用 webpack@4.16.0 新特性 `optimization.moduleIds`。

**打包结果 Output**

> 无 `b.js` 模块时，见 dist1 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
        index_af7c6890.js  181 bytes       0  [emitted]  index
runtime~index_2f124e9a.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_c2408a59.js   69.7 KiB       2  [emitted]  vendors~index
```

> 有 `b.js` 模块，见 dist2 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
        index_7e785a12.js  241 bytes       0  [emitted]  index
runtime~index_2f124e9a.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_c2408a59.js   69.7 KiB       2  [emitted]  vendors~index
```

可以看到只有 index 文件的 `hash` 变动了，符合预期。
