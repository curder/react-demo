import React, { Component } from 'react'

export class MainProducts extends Component {
  render() {
    const { products } = this.props

    return (
      <div className='main-products'>
        <h2>商品列表</h2>
        <ul>
          {products.map((product, index) => <li key={index}>{product}</li>)}
        </ul>
      </div>
    )
  }
}

export default MainProducts