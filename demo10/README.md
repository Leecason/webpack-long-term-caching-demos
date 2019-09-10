## Demo10 稳定 `chunk id`

**使用内置插件 `webpack.NamedChunksPlugin`**

```js
// webpack.config.js
...
plugins: [
  ...
  new webpack.NamedChunksPlugin(chunk => {
    if (chunk.name) {
      return chunk.name;
    }
    return Array.from(chunk.modulesIterable, m => m.id).join("_");
  }),
]
...
```

如果有 `chunk name` 则使用 `chunk name` 命名，否则使用 `chunk` 中包含的 `module id` 并用 `_` 连接进行命名。

**打包结果 Output**

> 未添加 index2 时，见 dist1 文件夹

```zsh
                    Asset       Size         Chunks             Chunk Names
       index.b320a09b.css   62 bytes          index  [emitted]  index
        index_93fea262.js  370 bytes          index  [emitted]  index
runtime~index_1ae1d096.js   2.24 KiB  runtime~index  [emitted]  runtime~index
vendors~index_9f3b7952.js   69.8 KiB  vendors~index  [emitted]  vendors~index
         z6lC_072b1460.js  135 bytes           z6lC  [emitted]
```

> 添加 index2 后，见 dist2 文件夹

```zsh
                     Asset       Size          Chunks             Chunk Names
        index.b320a09b.css   62 bytes           index  [emitted]  index
        index2_864fb9c1.js  150 bytes          index2  [emitted]  index2
         index_93fea262.js  370 bytes           index  [emitted]  index
runtime~index2_74b91b67.js   1.47 KiB  runtime~index2  [emitted]  runtime~index2
 runtime~index_1ae1d096.js   2.24 KiB   runtime~index  [emitted]  runtime~index
 vendors~index_9f3b7952.js   69.8 KiB   vendors~index  [emitted]  vendors~index
          z6lC_072b1460.js  135 bytes            z6lC  [emitted]
```

可以看到除了添加了 `index2.js` 及 `runtime~index2.js` 这两个文件外，其余文件 `hash` 值都未发生变化。

撒花 🎉🎉🎉
