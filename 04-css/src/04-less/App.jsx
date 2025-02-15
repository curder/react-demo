import React, { PureComponent } from 'react'
import './App.less'

export class App extends PureComponent {
    render() {
        return (
            <div className='section'>
                <h1 className='title'>Hello Less</h1>
                <p className='text'>This is a paragraph</p>
            </div>
        )
    }
}

export default App