import React, { PureComponent, createRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            isShow: false,
        }
    }

    render() {
        const { isShow } = this.state
        return (
            <div>
                <button onClick={() => this.setState({ isShow: !isShow })}>Toggle</button>

                <CSSTransition unmountOnExit={true} in={isShow} timeout={2000} classNames="app">
                    <h2>Hello React!</h2>
                </CSSTransition>
            </div>
        )
    }
}

export default App