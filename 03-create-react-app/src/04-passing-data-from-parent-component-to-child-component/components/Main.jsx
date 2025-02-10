import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProducts from './MainProducts'
import axios from 'axios'

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      banners: [],
      products: [],
    }
  }

  async componentDidMount() {
    const url = 'http://123.207.32.32:8000/home/multidata';
    const { data } = await axios.get(url).then(({ data }) => data)

    this.setState({
      banners: data.banner.list,
      products: data.recommend.list,
    })
  }

  render() {
    const { banners, products } = this.state;

    return (
      <div className='main'>
        <MainBanner title="轮播图" banners={banners} />
        <MainBanner />
        <MainProducts products={products} />
      </div>
    )
  }
}

export default Main