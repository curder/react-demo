import React, { Component } from 'react'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello, React!',
            count: 0,
        }
    }

    changeText(e) {
        // 1. 接收对象参数
        this.setState({
            message: 'Hello, React! (Updated)',
        })

        // 2. 接收回调函数参数
        this.setState((state, props) => {
            // 2.1 在回调函数中可以编写新的状态逻辑
            // 2.2 回调函数中会接收到两个参数：state 和 props
            return {
                message: `${state.message} (Updated again)`,
            }
        })

        // 3. 异步调用
        this.setState({ message: "Hello, React! (Updated again)" }, () => {
            // 3.2 在回调函数中可以获取到最新的状态
            console.log(this.state.message) // Hello, React! (Updated again)
        })
        // 3.1 在 setState 后立即获取状态，获取到的是上一次的状态
        console.log(this.state.message) // Hello, React!
    }

    changeCount(number) {
        this.setState({
            count: this.state.count + number,
        })
    }

    render() {
        const { message, count } = this.state
        return (
            <div>
                <h2>{message}</h2>
                <div>
                    <button onClick={e => this.changeText(e)}>Change Text</button>
                </div>
                <h3>{count}</h3>
                <div>
                    <button onClick={e => this.changeCount(1)}> + 1</button>
                </div>
            </div>
        )
    }
}

export default App