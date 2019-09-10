## Demo09 增加第二个入口文件

**新增第二个入口文件 内容随意**

```js
// index2.js
console.log('this is from index2');
```

```js
// webpack.config.js

...
entry: {
  index: './src/index.js',
  index2: './src/index2.js',
},
```

**打包结果 Output**

> 未添加 index2 时，见 dist1 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
            3_614a07a2.js  130 bytes       3  [emitted]
       index.b320a09b.css   62 bytes       0  [emitted]  index
        index_0273e7fa.js  331 bytes       0  [emitted]  index
runtime~index_57589e3f.js   2.22 KiB       1  [emitted]  runtime~index
vendors~index_e1005034.js   69.7 KiB       2  [emitted]  vendors~index
```

> 添加 index2 后，见 dist2 文件夹

```zsh
                     Asset       Size  Chunks             Chunk Names
             5_8669c06c.js  130 bytes       5  [emitted]
        index.b320a09b.css   62 bytes       0  [emitted]  index
        index2_6447342f.js  128 bytes       1  [emitted]  index2
         index_56b87637.js  331 bytes       0  [emitted]  index
runtime~index2_a321ef2b.js   1.46 KiB       3  [emitted]  runtime~index2
 runtime~index_f6b3525d.js   2.22 KiB       2  [emitted]  runtime~index
 vendors~index_aa1cd9d9.js   69.7 KiB       4  [emitted]  vendors~index
```

可以看到新增了一个入口文件后，除了添加了 `index2.js` 和 `runtime~index2.js` 这两个文件外，CSS 文件 `hash` 值没变，其余文件的 `hash` 值都发生了改变，这对于我们要达到的持久缓存来说是毁灭性的。原因是我们虽然稳定了 `module id`，但是没有稳定 `chunk id`，而且这里异步模块由于没有 `chunk name`，所以又使用了自增的 `chunk id` 进行命名。与之前的自增 `module id` 的情况相类似，所以我们要想办法稳定 `chunk id`。
