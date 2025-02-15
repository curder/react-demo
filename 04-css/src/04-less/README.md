# Less 

通过添加 `@craco/craco craco-less` 依赖，允许在项目中编写 less 语法。

```bash
yarn add @craco/craco craco-less -D
touch craco.config.js
```

编写 `craco.config.js` 文件，配置 less 语法支持。

```js
// craco.config.js
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
};
```