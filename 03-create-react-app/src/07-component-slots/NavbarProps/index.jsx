import React, { Component } from 'react'
import "./style.css"

export class NarBarProps extends Component {
    render() {
        const { left, center, right } = this.props

        return (
            <div className='nav-bar'>
                <div className="left">{left}</div>
                <div className="center">{center}</div>
                <div className="right">{right}</div>
            </div>
        )
    }
}

export default NarBarProps