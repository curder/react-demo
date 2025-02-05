import React, { Component } from 'react'

export class MainBanner extends Component {
  render() {
    const { title, banners } = this.props;

    return (
      <div className='main-banner'>
        <h2>{title}</h2>
        <ul>
          {banners.map((banner, index) => <li key={index}>{banner}</li>)}
        </ul>
      </div>
    )
  }
}

export default MainBanner