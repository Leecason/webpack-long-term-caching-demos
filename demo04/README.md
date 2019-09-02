## Demo04 增加新模块

**在入口文件新增一个 `b.js` 模块**

```js
// index.js
import './b'; // 在 a.js 上面
import './a';

console.log('hello world');

```

**`b.js` 随便写入一点内容**

```js
// b.js
console.log('this is from b');
```

**打包结果 Output**

> 无 `b.js` 模块时，见 dist1 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
        index_0174c3e5.js  168 bytes       0  [emitted]  index
runtime~index_2f124e9a.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_07bff0e7.js   69.7 KiB       2  [emitted]  vendors~index
```

> 有 `b.js` 模块，见 dist2 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
        index_367a4665.js  219 bytes       0  [emitted]  index
runtime~index_2f124e9a.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_210f8b90.js   69.7 KiB       2  [emitted]  vendors~index
```

可以看到 index 文件的 `hash` 变动了，符合预期。但是 vendors 文件按照期望 `hash` 并不应该发生变化，因为是打包的 lodash 库，与 b 模块无关。原因是 webpack4 默认按照 `resolving order` 使用自增 `module id` 进行模块标识。将 `b.js` 的引入放到 `a.js` 上面后，`a.js` 的 resolve 顺序在 `b.js` 之后，所以 `module id` 改变导致 `hash` 改变，所以我们要想办法稳定 `module id`。
