import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddCounter extends Component {
    addCounter(number) {
        this.props.addClick(number)
    }
    render() {
        return (
            <div>
                <button onClick={e => this.addCounter(1)}>+1</button>
                <button onClick={e => this.addCounter(5)}>+5</button>
                <button onClick={e => this.addCounter(10)}>+10</button>
            </div>
        )
    }
}

AddCounter.propTypes = {
    addClick: PropTypes.func.isRequired
}

export default AddCounter