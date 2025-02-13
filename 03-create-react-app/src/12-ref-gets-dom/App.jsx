import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.titleRef = React.createRef()
    this.titleElement = null
  }

  getNativeDom() {
    // 1. 在元素上绑定 ref 属性，可以通过 this.refs 获取到元素的 DOM 对象
    console.log(this.refs['hello-react'])

    // 2. 在类组件中，可以通过 React.createRef() 创建一个 ref 对象
    console.log(this.titleRef.current)

    // 3. 通过回调函数的方式获取到元素的 DOM 对象
    console.log(this.titleElement)
  }

  render() {
    return (
      <div>
        <h1 ref="hello-react">Hello React</h1>
        <h2 ref={this.titleRef}>Hello Title Ref</h2>
        <h3 ref={el => this.titleElement = el}>Hello title Element</h3>
        <button onClick={e => this.getNativeDom()} >Get Dom</button>
      </div>
    )
  }
}

export default App