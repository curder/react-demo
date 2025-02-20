# React Router

[React Router](https://reactrouter.com) 是一个用于 React 应用程序的声明式路由库。

## 基本使用

安装

```bash
yarn add react-router-dom -D
```

在 `App.js` 中引入， 使用 `BrowserRouter` 组件：

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

- `BrowserRouter` 使用 HTML5 的 history API 来保持 UI 和 URL 的同步。
- `HashRouter` 使用 URL 的 hash (例如：`http://example.com/#/some/path`) 来保持 UI 和 URL 的同步。