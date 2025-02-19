import React, { PureComponent } from 'react'
import './style.css'
import Home from './components/Home'
import Profile from './components/Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { changeBannersAction, changeRecommendsAction } from './store/actionCreators'

export class App extends PureComponent {

  componentDidMount() {
    const url = `http://123.207.32.32:8000/home/multidata`
    axios.get(url).then(({ data }) => {
      return { banner: data.data.banner.list, recommend: data.data.recommend.list }
    }).then(({ banner, recommend }) => {
      const { changeBanners, changeRecommend } = this.props
      changeBanners(banner)
      changeRecommend(recommend)
    })
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

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommend(recommends) {
    dispatch(changeRecommendsAction(recommends))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)