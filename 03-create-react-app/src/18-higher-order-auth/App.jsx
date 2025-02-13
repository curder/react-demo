import React, { PureComponent } from 'react'
import Dashboard from './Dashboard'

export class App extends PureComponent {
    loginHandle() {
        localStorage.setItem('token', 'fake-token')

        // 强制重新执行 render 函数渲染DOM，一般不建议这样做，建议通过修改组件的 state 来更新 DOM 组件
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>Higher Order Auth</h1>

                <button onClick={() => this.loginHandle()}>Login</button>

                <Dashboard />
            </div>
        )
    }
}

export default App