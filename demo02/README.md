## Demo02 增加一个 vendors

**在入口文件新增一个 `a.js` 模块**

```js
// index.js
import './a';

console.log('hello world');

```

**`a.js` 中使用 lodash 的 add 函数**

```js
// a.js
import { add } from 'lodash';

add(1, 1);
```

**`webpack` 配置文件中使用 splitChunk 进行分包，抽出 vendors 以及 runtime 文件。
> 不了解的可以去 webpack 官网翻阅一下。

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
      chunks: 'all'
    },
  },
};
```

**打包结果 Output**

> 见 dist 文件夹

```she
                    Asset       Size  Chunks             Chunk Names
        index_61b135b8.js  168 bytes       0  [emitted]  index
runtime~index_61b135b8.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_61b135b8.js   69.7 KiB       2  [emitted]  vendors~index
```

打包后发现所有的文件都带有相同的 `hash` 值，意味着每有一次版本迭代需要打包的时候，都会出现新的 hash 值，客户端对之前资源文件的缓存都会失效，所以淘汰 `hash`。
