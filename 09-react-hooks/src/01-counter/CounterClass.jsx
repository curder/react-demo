import React, { PureComponent } from 'react'

export class CounterClass extends PureComponent {
    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    onIncrement = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <div className='counter-class'>
                <h3>Counter Class</h3>
                <p>{this.state.counter}</p>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>

            </div>
        )
    }
}

export default CounterClass