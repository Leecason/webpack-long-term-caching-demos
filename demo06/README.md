## Demo06 增加 CSS 模块

**入口文件新增一个 CSS 文件**

```js
// index.js
import './c.css';
import './b';
import './a';

console.log('hello world');

```

**`c.css` 随便写入一点内容**

```css
// c.css
body {
  color: red;
}
```

**使用 `mini-css-extract-plugin` 将这个 CSS 模块单独抽离成一个文件**

```js
// webpack.config.js
module.exports = {
  ...
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
  ],
};
```

**然后打包，再随意修改一点 CSS 内容，再次打包**

**打包结果 Output**

> 修改 CSS 文件前，见 dist1 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
       index.da7f9913.css   24 bytes       0  [emitted]  index
        index_4e52e374.js  274 bytes       0  [emitted]  index
runtime~index_551621ef.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_c2408a59.js   69.7 KiB       2  [emitted]  vendors~index
```

> 修改 CSS 文件后，见 dist2 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
       index.b320a09b.css   62 bytes       0  [emitted]  index
        index_4ee472a6.js  274 bytes       0  [emitted]  index
runtime~index_551621ef.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_c2408a59.js   69.7 KiB       2  [emitted]  vendors~index
```

两次打包我们只对 CSS 文件进行了修改，所以预期一定是只希望 CSS 文件的 `hash` 值发生变化，但是不幸打包结果显示是入口文件的 `index.js` 的 `hash` 值也发生了变化。
