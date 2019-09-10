# webpack-long-term-caching-demos

This repo is a collection of simple demos of Webpack for long-term caching.

Before you learn those demos, you need to know about Webpack.

## How to use

First, install `webpack` and `webpack-cli` globally.

```zsh
$ npm i -g webpack webpack-cli
```

Then, clone the repo.

```zsh
$ git clone https://github.com/Leecason/webpack-long-term-caching-demos.git
```

Install dependencies.

```zsh
$ cd webpack-long-term-caching-demos
$ npm install
```

Now, play with the source files under the repo's demo* directories.

```zsh
$ cd demo01
$ npm run build
```

## Index

1. [简单的 `hash`](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo01)
1. [增加一个 vendors](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo02)
1. [使用 `chunkhash`](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo03)
1. [增加新模块](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo04)
1. [稳定 `module id`](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo05)
1. [增加 CSS 模块](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo06)
1. [`contenthash`解决 CSS 模块修改后 JS 文件 `hash` 变动问题](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo07)
1. [增加异步模块](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo08)
1. [增加第二个入口文件](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo09)
1. [稳定 `chunk id`](https://github.com/Leecason/webpack-long-term-caching-demos/tree/master/demo10)

## License
MIT
