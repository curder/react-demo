import React, { PureComponent } from 'react'
import './App.css'
import Banner from './components/Banner'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <h2 className='page-title'>Page Title</h2>

                <p className='page-content'>Page Content</p>

                <Banner />
            </div>
        )
    }
}

export default App