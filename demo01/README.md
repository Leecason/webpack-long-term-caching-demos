# Demo01 简单的 `hash`

入口文件`index.js`

```js
// index.js
console.log('hello world');

```

`webpack` 配置文件

```js
// webpack.config.js
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash:8].js', // use
  },
};
```

Output:

> 可见 dist 文件夹下

```she
            Asset       Size  Chunks             Chunk Names
index_cb736c3b.js  956 bytes       0  [emitted]  index
```

文件命名方式使用 `name + hash`。webpack 官网中对 `hash` 的描述是 `The hash of the module identifier`，那我们现在稍微改动一下入口文件，看看输出会发生什么变化。
