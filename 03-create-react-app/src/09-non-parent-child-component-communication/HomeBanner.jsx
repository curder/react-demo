import React, { Component } from 'react'
import eventBus from './utils/eventBus'

export class HomeBanner extends Component {
    prevClick() {
        eventBus.emit('homeBannerPrev', {
            name: 'HomeBanner',
            time: new Date(),
        })
    }
    nextClick() {
        eventBus.emit('homeBannerNext', {
            name: 'HomeBanner',
            time: new Date(),
        })
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.prevClick()}>Prev</button>
                <button onClick={e => this.nextClick()}>Next</button>
            </div>
        )
    }
}

export default HomeBanner