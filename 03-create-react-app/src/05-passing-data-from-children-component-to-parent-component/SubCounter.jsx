import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SubCounter extends Component {
    subCounter(number) {
        this.props.subClick(number)
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.subCounter(-1)}>-1</button>
                <button onClick={(e) => this.subCounter(-5)}>-5</button>
                <button onClick={(e) => this.subCounter(-10)}>-10</button>
            </div>
        )
    }
}

SubCounter.propTypes = {
    subClick: PropTypes.func.isRequired
}

export default SubCounter