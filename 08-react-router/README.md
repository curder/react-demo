# React Router

[React Router](https://reactrouter.com) 是一个用于 React 应用程序的声明式路由库。

## 基本使用

### 安装

使用下面的命令可以安装 React Router：

```bash
yarn add react-router-dom -D
```

### 使用

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

### 定义路由

使用 `Routes` 和 `Route` 组件来定义路由：

```js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

- `Routes` 组件用于定义路由。它应该包含一个或多个 `Route` 组件。
- `Route` 组件用于定义一个路由。它应该包含一个 `path` 属性和一个 `element` 属性。`path` 属性定义了 URL 路径，`element` 属性定义了当该路由匹配时应该渲染的组件。
- `*` 路由用于匹配所有未定义的路由，通常用于显示 404 页面。

### 路由嵌套

使用 `Routes` 和 `Route` 组件来定义路由嵌套：

```js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import User from "./pages/user";
import UserProfile from "./pages/user-profile";
import UserPosts from "./pages/user-posts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="posts" element={<UserPosts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```