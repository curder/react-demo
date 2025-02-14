import React, { createRef, PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            isLogin: false,
        }
    }
    render() {
        const { isLogin } = this.state
        const nodeRef = createRef()
        return (
            <div>
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        key={isLogin ? 'exit' : `login`}
                        nodeRef={nodeRef}
                        classNames="app"
                        timeout={1000}>
                        <button ref={nodeRef} onClick={() => this.setState({ isLogin: !isLogin })}>
                            {isLogin ? `退出` : `登录`}
                        </button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

export default App