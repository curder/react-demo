import React, { PureComponent } from 'react'
import Home from './Home'
import Banner from './Banner'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            message: 'Hello, React!',
            count: 0,
        }
    }

    changeText() {
        // this.setState({ message: 'Hello, React!', })
        this.setState({ message: 'Hello, React! (Updated)', })
    }

    changeCount() {
        this.setState({ count: this.state.count + 1, })
    }

    render() {
        console.log('App Component Rendered')
        const { message, count } = this.state
        return (
            <div>
                <h2>App Component count: {count}</h2>
                <button onClick={e => this.changeText()}>Change Text</button>
                <button onClick={e => this.changeCount()}>Change Count</button>
                <Home message={message} />
                <Banner message={message} />
            </div>
        )
    }
}

export default App