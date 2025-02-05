import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProducts from './MainProducts'

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      banners: ["新歌曲", "新MV", "新歌单", "新推荐"],
      products: ["推荐商品", "热门商品", "流行商品"],
    }
  }
  render() {
    const { banners, products } = this.state;

    return (
      <div className='main'>
        <MainBanner title="轮播图" banners={banners} />
        <MainProducts products={products} />
      </div>
    )
  }
}

export default Main