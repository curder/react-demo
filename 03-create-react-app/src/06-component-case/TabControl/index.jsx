import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }

    changeCurrentIndex(index) {
        this.setState({
            currentIndex: index
        })

        this.props.changeTab(index)
    }

    render() {
        const { titles } = this.props
        const { currentIndex } = this.state

        return (
            <div className='tab-control'>
                {titles.map((item, index) =>
                    <div className={`item ${currentIndex === index && 'active'}`}
                        onClick={(e) => this.changeCurrentIndex(index)}
                        key={index}>
                        <span className='text'>{item}</span>
                    </div>
                )}
            </div>
        )
    }
}

export default TabControl