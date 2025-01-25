# Getting Started with Create React App

## 安装 `create-react-app`

```bash
# npx
npx create-react-app 03-create-react-app
npx create-react-app 03-create-react-app --tempalte typescript # 使用 TypeScript
```

## 函数组件

函数组件是使用 `function` 关键字来定义的函数，只是这个函数会返回和类组件中 `render` 函数返回一样的内容。

函数组件的特点：

- 没有生命周期，也会被更新并挂载，当没有生命周期函数。
- `this` 关键字不能指向组件实例（没有组件实例）
- 没有内部状态(`state`)

函数组件示例：

```jsx
export function App() {
    return (<h2>App Functional Component</h2>)
}

export default App
```