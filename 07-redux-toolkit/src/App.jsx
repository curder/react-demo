import React, { PureComponent } from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import './style.css'
import { connect } from 'react-redux'

export class App extends PureComponent {
  render() {
    const { count } = this.props

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

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  }
}
export default connect(mapStateToProps)(App)