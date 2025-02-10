import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 100
        }
    }

    changeCounter(number) {
        this.setState({
            counter: this.state.counter + number
        })
    }

    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>当前记数: {counter}</h2>

                <div>
                    <AddCounter addClick={(counter) => this.changeCounter(counter)} />
                </div>

                <div>
                    <SubCounter subClick={(counter) => this.changeCounter(counter)} />
                </div>

            </div>
        )
    }
}


export default App
