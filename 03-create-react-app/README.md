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

## 非父子组件之间的通讯 `Context`

非父子组件之间的通讯适合使用 `Context`。

- `Context` 提供了一种在组件之间共享值的方式，而不必显式的通过组件树的形式逐层传递 `props`；
- `Context` 设计的目的是为了共享那些对于一个组件树而言是"全局"的数据，比如传递认证的用户、用户主题或语言。

### `React.createContext()`

`React.createContext()` 用于创建一个需要共享的 `Context` 对象，如果一个组件订阅了 `Context`，那么这个组件会从离自身最近的那个匹配的 Provider 中读取到当前的context值；

```typescript
import React from 'react'

const themeContext = React.createContext(defaultValue);
```

`defaultValue` 是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值

### `Context.Provider` 

- 每个 Context 对象都会返回一个 Provider React组件，它允许消费组件订阅 context 的变化
- Provider 接收个 value 属性，传递给消费组件；
- 一个 Provider 可以和多个消费组件有对应关系；
- 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据；
- 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染；

### `Class.contextType`

- 挂载在 class 上的 contextType 属性会被重赋值为一个由 `React.createContext()` 创建的 Context 对象：
- 允许使用 `this.context` 来消费最近 Context 上的那个值；
- 可以在任何生命周期中访问到它，包括 `render` 函数中；

### `Context.Consumer`

- React 组件也可以订阅到 context 变更。能在函数式组件中完成订阅 context。
- 这里需要函数作为子元素（function as child）这种做法；
- 这个函数接收当前的 context 值，返回一个 React 节点；


## 非父子组件通讯 `Event Bus`

使用命令安装 `hy-event-store` 库：

```bash
yarn add -D hy-event-store
```

## `setState`

### React 中为什么使用 `setState`

开发中并不能直接通过修改 `state` 的值来让界面发生更新：

- 因为修改了 `state` 之后 `React` 并不知道数据发生了变化，而我们是希望 `React` 根据最新的 `State` 来重新渲染界面
- React 并没有实现类似于 Vue2 中的 `Object.defineProperty` 或者 Vue3 中的 Proxy 的方式来监听数据的变化
- **必须通过 `setState` 来告知 React 数据已经发生了变化；**


### `setState` 异步更新

- `setState` 设计为异步, 可以显著的提升性能；如果每次调用 `setState` 都进行一次更新, 那么意味着 `render` 函数会被频繁调用, 界面重新渲染, 这样效率是很低的；最好的办法应该是获取到多个更新, 之后进行批量更新； 

- 如果同步更新了 `state`, 但是还没有执行 `render` 函数, 那么 `state` 和 `props` 不能保持同步；`state` 和 `props` 不能保持一致性, 会在开发中产生很多的问题；


## ref 获取 DOM

1. 在元素上绑定 `ref` 属性，可以通过 `this.refs` 获取到元素的 DOM 对象（不推荐）
    ```jsx
    import React, { PureComponent } from 'react'

    export class App extends PureComponent {
        getNativeDom() {
            console.log(this.refs['hello-react'])
        }

        render() {
            return (
            <div>
                <h1 ref="hello-react">Hello React</h1>
            </div>
            )
        }
    }

    export default App
    ```
2. 在类组件中，可以通过 React.createRef() 创建一个 ref 对象（推荐）

    ```jsx
    import React, { PureComponent } from 'react'

    export class App extends PureComponent {
        constructor() {
            super()

            this.titleRef = React.createRef()
        }

        getNativeDom() {
            // 2. 在类组件中，可以通过 React.createRef() 创建一个 ref 对象
            console.log(this.titleRef.current)
        }

        render() {
            return (
            <div>
                <h2 ref={this.titleRef}>Hello Title Ref</h2>
                <button onClick={e => this.getNativeDom()} >Get Dom</button>
            </div>
            )
        }
    }

    export default App
    ```
3. 通过回调函数的方式获取到元素的 DOM 对象（不推荐）

    ```jsx
    import React, { PureComponent } from 'react'

    export class App extends PureComponent {
        constructor() {
            super()

            this.titleElement = null
        }

        getNativeDom() {
            console.log(this.titleElement)
        }

        render() {
            return (
            <div>
                <h3 ref={el => this.titleElement = el}>Hello title Element</h3>
                <button onClick={e => this.getNativeDom()} >Get Dom</button>
            </div>
            )
        }
    }

    export default App
    ```

## ref 获取 Component

1. 在类组件中，可以通过 `React.createRef()` 创建一个 Ref 对象

    ```jsx
    import React, {PureComponent } from 'react'

    class Banner extends PureComponent {
        render() {
            return (
                <h2>Hello Banner</h2>
            )
        }
    }

    export class App extends PureComponent {
        constructor() {
            super()
            // 创建 ref 对象
            this.bannerRef = React.createRef()
        }
        getComponent() {
            // 通过 ref 获取组件实例
            console.log(this.bannerRef.current)
        }
        render() {
            return (
                <div>
                    <Banner ref={this.bannerRef} />
                    <button onClick={e => this.getComponent()}>Get Component</button>
                </div>
            )
        }
    }

    export default App
    ```



2. 通过 forwardRef 函数包裹函数组件，使其支持 ref 属性，从而获取 DOM

    ```jsx
    import React, { forwardRef, PureComponent } from 'react'

    const Banner2 = forwardRef((props, ref) => {
        return (
            <h2 ref={ref}>Hello Banner2</h2>
        )
    })

    export class App extends PureComponent {
        constructor() {
            super()
            // 创建 ref 对象
            this.banner2Ref = React.createRef()
        }
        getComponent() {
            // 通过 ref 获取组件实例
            console.log(this.banner2Ref.current)
        }
        render() {
            return (
                <div>
                    <Banner2 ref={this.banner2Ref} />
                    <button onClick={e => this.getComponent()}>Get Component</button>
                </div>
            )
        }
    }

    export default App
    ```

## 高阶组件

接收一个组件作为参数，返回一个新的组件。

```jsx
import { PureComponent } from 'react'

function higherOrderComponent(WrappedComponent) {
  return class extends PureComponent {
    render() {
      return (
        <WrappedComponent />
      )
    }
  }
}
```

1. 高阶组件本身不是一个组件，它是一个函数
2. 函数接收一个组件作为参数，返回一个新的组件
3. 高阶组件并不是 React API 的一部分，它是基于 React 组合特性而形成的设计模式

## Fragment

Fragment 允许将子列表分组，而无需向 DOM 添加额外节点。

在 React 中还提供了 Fragment 短语法：

```jsx
import { Fragment } from 'react'

<Fragment>
    <h2>Title</h2>
    <p className="container">Content</p>
</Fragment>

// 可以写成
<>
    <h2>Title</h2>
    <p className="container">Content</p>
</>
```

它看起来像是空标签 `<></>`，**如果在一些循环渲染数据时，需要向 Fragment 中添加对应的 `key` 时，就不允许使用短语法。**