import React, { PureComponent } from 'react'
import './style.css'
import Home from './components/Home'
import Profile from './components/Profile'
import store from './store'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      count: store.getState().count,
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        count: state.count,
      })
    })
  }
  render() {
    const { count } = this.state

    return (
      <div>
        <h2>Counter: {count}</h2>
        <div className="components">
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

export default App