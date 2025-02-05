import React, { Component } from 'react'

export class MainBanner extends Component {
  // constructor(props) {
  //   super();
  // }
  render() {
    const { banners } = this.props;

    return (
      <div className='main-banner'>
        <h2>轮播图</h2>
        <ul>
          {banners.map((banner, index) => <li key={index}>{banner}</li>)}
        </ul>
      </div>
    )
  }
}

export default MainBanner