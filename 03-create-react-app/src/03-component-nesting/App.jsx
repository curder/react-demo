import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App