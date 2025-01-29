import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProducts from './MainProducts'

export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <MainBanner />
        <MainProducts />
      </div>
    )
  }
}

export default Main