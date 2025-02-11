import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './contexts/theme'
import UserContext from './contexts/user'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            info: { name: 'Curder', age: 18 },
        }
    }

    render() {
        const { info } = this.state
        return (
            <div>
                <h2>App</h2>
                {/* <Home name={info.name} age={info.age} />
                <Home {...info} /> */}
                {/* 使用 Context 传递数据 */}
                <ThemeContext.Provider value={{ color: 'red', fontSize: '20px' }}>
                    <UserContext.Provider value={{ name: 'Curder', age: 18 }}>
                        <Home {...info} />
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default App