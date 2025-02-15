import React, { PureComponent } from 'react'

export class App extends PureComponent {

    constructor() {
        super()

        this.state = {
            titleSize: 30,
        }
    }

    incrementTitleSize(currentSize) {
        this.setState({ titleSize: currentSize + 2 })
    }

    render() {
        const { titleSize } = this.state

        return (
            <div>

                <button onClick={e => this.incrementTitleSize(titleSize)}>+</button>

                <h2 style={{ color: 'red', fontSize: `${titleSize}px` }}>Page Title</h2>


                <p style={{ color: 'orange', fontSize: '18px' }}>Page Content</p>
            </div>
        )
    }
}

export default App