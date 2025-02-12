import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/eventBus'

export class App extends Component {
  componentDidMount() {
    // 监听事件
    eventBus.on('homeBannerPrev', this.homeBannerPrevEventHandle.bind(this))
    eventBus.on('homeBannerNext', this.homeBannerNextEventHandle.bind(this))
  }

  componentWillUnmount() {
    // 取消事件的监听
    eventBus.off('homeBannerPrev', this.homeBannerPrevEventHandle)
    eventBus.off('homeBannerNext', this.homeBannerNextEventHandle)
  }

  homeBannerPrevEventHandle(payload) {
    console.log('homeBannerPrev', payload)
  }
  homeBannerNextEventHandle(payload) {
    console.log('homeBannerNext', payload)
  }


  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default App