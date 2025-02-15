# CSS 模块

CSS modules 并不是 React 特有的解决方案, 而是所有使用了类似于 webpack 配置的环境下都可以使用的。

- 如果在其他项目中使用它, 那么需要对 webpack 进行配置, 比如配置 `webpack.config.js` 中的 `modules: true`。

React的脚手架已经内置了css modules的配置，`.css/.less/.scss` 等样式文件都需要修改成 `.module.css/.module.less/.module.scss` 后就可以引用并且进行使用。
  
csS modules确实解决了局部作用域的问题, 也是很多人喜欢在React中使用的一种方案。

## 缺点

- 引用的类名, 不能使用连接符 (`.home-title`) , 在JS中是不识别的，可以使用 `{style[homeTitle]}`；
- 所有的 className 都必须使用`{style.className}` 的形式来编写；
- 不方便动态来修改某些样式, 依然需要使用内联样式的方式；

## 优点

- 所有的 className 都是局部作用域, 不会和全局其他的样式冲突；
- 类名可以自定义, 不再受到第三方样式的影响；