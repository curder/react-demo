import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  // static defaultProps = {
  //   title: "默认标题",
  //   banners: [],
  // }
  render() {
    const { title, banners } = this.props;

    return (
      <div className='main-banner'>
        <h2>{title}</h2>
        <ul>
          {banners.map((banner, index) => <li key={banner.acm}>{banner.title}</li>)}
        </ul>
      </div>
    )
  }
}

MainBanner.propTypes = {
  title: PropTypes.string.isRequired,
  banners: PropTypes.array,
}

MainBanner.defaultProps = {
  title: "默认标题",
  banners: [],
}

export default MainBanner