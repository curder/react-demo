import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            isActive: true,
            isDanger: false
        }
    }
    render() {
        const { isActive, isDanger } = this.state
        return (
            <div className={classNames({ 'active': isActive, 'danger': isDanger })}>App</div>
        )
    }
}

export default App