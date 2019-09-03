## Demo08 增加异步模块

**入口文件新增一个异步模块**

```js
// index.js
import './c.css';
import './b';
import './a';

import('./async_module').then(content => console.log(content));

console.log('hello-world');

```

**异步模块内容随意**

```js
// async_module.js
export default {
  content: 'async',
};
```

**打包结果 Output**

> 没有异步模块时，见 dist1 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
       index.b320a09b.css   62 bytes       0  [emitted]  index
        index_5c33384b.js  274 bytes       0  [emitted]  index
runtime~index_0ef176c0.js   1.46 KiB       1  [emitted]  runtime~index
vendors~index_e1005034.js   69.7 KiB       2  [emitted]  vendors~index
```

> 添加异步模块后，见 dist2 文件夹

```zsh
                    Asset       Size  Chunks             Chunk Names
            3_614a07a2.js  130 bytes       3  [emitted]
       index.b320a09b.css   62 bytes       0  [emitted]  index
        index_0273e7fa.js  331 bytes       0  [emitted]  index
runtime~index_57589e3f.js   2.22 KiB       1  [emitted]  runtime~index
vendors~index_e1005034.js   69.7 KiB       2  [emitted]  vendors~index
```

可以看到新增了一个文件，同时入口文件 `index.js` 和 `runtime` 的 `hash` 值发生了改变，
CSS 文件和 vendors 的 `hash` 值未变，符合预期。
