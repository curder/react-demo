import React, { Component } from 'react'
import HomeContainer from './HomeContainer'
import HomeBanner from './HomeBanner'

export class Home extends Component {
    render() {
        const { name, age } = this.props
        return (
            <div>
                <h2>Home: {name}, {age}</h2>
                <HomeBanner />
                <HomeContainer />
            </div>
        )
    }
}

export default Home