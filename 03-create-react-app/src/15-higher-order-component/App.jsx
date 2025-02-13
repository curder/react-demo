import React, { PureComponent } from 'react'

// 高阶组件：接收一个组件作为参数，返回一个新的组件
// 1. 高阶组件本身不是一个组件，它是一个函数
// 2. 函数接收一个组件作为参数，返回一个新的组件
function higherOrderComponent(WrappedComponent) {
  return class extends PureComponent {
    render() {
      return (
        <WrappedComponent />
      )
    }
  }
}

class HelloReact extends PureComponent {
  render() {
    return (
      <div>Hello React</div>
    )
  }
}

const HelloReactHOC = higherOrderComponent(HelloReact)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Higher Order Component</h1>
        <HelloReactHOC />
      </div>
    )
  }
}

export default App