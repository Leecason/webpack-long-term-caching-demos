## Demo07 `contenthash`解决 CSS 模块修改后 JS 文件 `hash` 变动问题

**修改配置文件 `contenthash` 替换 `chunkhash`**

```js
// webpack.config.js
module.exports = {
  ...
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[contenthash:8].js',
  },
  ...
};
```

**再次进行 [Demo06](https://github.com/Leecason/webpack-long-term-cache-demo/tree/master/demo06) 的操作，先打包，再随意修改一点 CSS 内容，再次打包**

**打包结果 Output**

> 修改 CSS 文件前，见 dist1 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
       index.da7f9913.css   24 bytes       0  [emitted]  index
        index_5c33384b.js  274 bytes       0  [emitted]  index
runtime~index_0ef176c0.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_e1005034.js   69.7 KiB       2  [emitted]  vendors~index
```

> 修改 CSS 文件后，见 dist2 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
       index.b320a09b.css   62 bytes       0  [emitted]  index
        index_5c33384b.js  274 bytes       0  [emitted]  index
runtime~index_0ef176c0.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_e1005034.js   69.7 KiB       2  [emitted]  vendors~index
```

可以看到入口文件 `index.js` 的 `hash` 值并没有随着 CSS 文件的修改发生改变，符合预期。
