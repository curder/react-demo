import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello, React!',
        }
    }

    changeText() {
        // this.setState({ message: 'Hello, React!', })
        this.setState({ message: 'Hello, React! (Updated)', })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.message !== this.state.message
    }

    render() {
        console.log('App Component Rendered')
        const { message } = this.state
        return (
            <div>
                <h2>App Component</h2>
                <button onClick={e => this.changeText()}>Change Text</button>
                <Home message={message} />
            </div>
        )
    }
}

export default App