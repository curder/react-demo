# React 学习

## Hello React

- [01. 渲染 Hello World](01-hello-react/01.hello-world.html)
- [02. 事件监听](01-hello-react/02.hello-react.html)
- [03. 重构代码](01-hello-react/03.hello-react-refactor.html)
- [04. 渲染电影列表](01-hello-react/04.movie-list.html)
- [05. 计数器案例](01-hello-react/05.counter.html)


## JSX

- [01. JSX语法](02-jsx/01.grammar.html)
- [02. JSX中的注释](02-jsx/02.notes.html)
- [03. JSX中渲染内容](02-jsx/03.content.html)
- [04. JSX中绑定属性](02-jsx/04.binding-attributes.html)
- [05. JSX中事件 this 绑定](02-jsx/05.binding-event-this.html)
- [06. JSX事件参数](02-jsx/06.binding-event-arguments.html)
- [07. JSX事件绑定案例](02-jsx/07.binding-event-case.html)
- [08. JSX中条件渲染](02-jsx/08.conditional-rendering.html)
- [09. JSX中条件渲染案例](02-jsx/09.condition-rendering-case.html)
- [10. 购物车案例](02-jsx/10.shopping-cart.html)

## Create react app

### 安装 `create-react-app`

```bash
# npx
npx create-react-app 03-create-react-app
npx create-react-app 03-create-react-app --tempalte typescript # 使用 TypeScript
```

### 函数组件

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