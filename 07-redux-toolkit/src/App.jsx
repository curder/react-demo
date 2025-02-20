import React, { PureComponent } from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import './style.css'
import { connect } from 'react-redux'
import { fetchHomeMultiDataAction } from './store/features/home'

export class App extends PureComponent {

  componentDidMount() {
    this.props.fetchHomeMultiData()
  }

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
const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultiData() {
    dispatch(fetchHomeMultiDataAction())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)