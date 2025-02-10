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

使用vscode安装并使用 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) 插件，更多使用说明[查看 Snippets](https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)。

## 父组件向子组件传递数据

父组件通过 `属性 = 值` 的形式来传递给子组件数据，子组件通过 `props` 参数获取副组件传递的数据。

当需要进行数据限定和默认值的设置时，可以使用 `prop-types` 包的 `PropTypes`进行限定：

```js
import PropTypes from 'prop-types'

// 设置数据格式
MainBanner.propTypes = {
  title: PropTypes.string.isRequired,
  banners: PropTypes.array,
}

// 默认值
MainBanner.defaultProps = {
  title: "默认标题",
  banners: [],
}
```

## 子组件向父组件传递数据

父组件通过传递自定义属性传递一个函数，在子组件中调用这个函数并传递对应的值来达到传递数据的目的。

## 实现组件的插槽

在开发中，经常会将公用代码提取成组件，但是为了组件根据通用型，不能将组件中的内容限制为固定的 `div`、`span` 等元素。

React 对于此类需要插槽的情况非常灵活，它有两种方案可以实现：

1. 组件的 `children` 子元素
   - 每个组件都可以获取到 `props.children`，它包含组件的开始标签和借宿标签之间的内容
   ```jsx
   export class NavBarChildren extends Component {
       render() {
           const { children } = this.props

           return (
               <div className='nav-bar'>
                   <div className="left">{children[0]}</div>
                   <div className="center">{children[1]}</div>
                   <div className="right">{children[2]}</div>
               </div>
           )
       }
   }

   export default NavBarChildren
   ```
  - 通过 `children` 实现的方案虽然可行，但是有弊端：
    - `children` 可能是一个数组也可能是一个元素
    - 通过索引值获取传入的元素容易出错，不能精准的获取传入的元素
2. `props` 属性传递 React 元素

  ```
  export class NarBarProps extends Component {
      render() {
          const { left, center, right } = this.props

          return (
              <div className='nav-bar'>
                  <div className="left">{left}</div>
                  <div className="center">{center}</div>
                  <div className="right">{right}</div>
              </div>
          )
      }
  }

  export default NarBarProps
  ```