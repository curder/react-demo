import React, { PureComponent } from 'react'
import Header from './Header'
import Banner from './Banner'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Banner />
            </div>
        )
    }
}

export default App