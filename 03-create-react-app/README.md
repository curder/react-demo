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

## 生命周期

很多的事物都有从创建到销毁的过程，这个过程称为生命周期。

生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段：

- 装载阶段（`Mount`），组件第一次在 DOM 树中被渲染的过程；
- 更新过程（`Update`），组件状态发生变化，重新更新渲染的过程；
- 卸载过程（`Unmount`），组件从 DOM 树中被移除的过程。

React内部为了告知当前处于哪些阶段，会对组件内部实现的某些函数进行回调，这些函数就是生命周期函数：

- `componentDidMount` 函数：当组件已经挂载到DOM上时，就会回调；
    - 依赖于 DOM 的操作可以在这里进行
    - 发送网络请求可以在这里进行（官方建议）
    - 可以在这里添加一些订阅，在 `componentWillUnmount` 取消订阅
- `componentDidUpdate` 函数：当组件已经发生了更新时，就会回调；
    - 当组件更新后，可以在此处对 DOM 进行操作
    - 如果对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；
- `componentWillUnmount` 函数：当组件即将被移除时，就会回调；
    - 再此方法中执行必要的清理操作，比如清理timer，取消网络请求或清除在 `componentDidMount` 中创建的订阅等；

可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能。

## 组件嵌套