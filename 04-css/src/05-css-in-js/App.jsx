import React, { PureComponent } from 'react'
import { AppWrapper } from './style'

export class App extends PureComponent {
    render() {
        return (
            <AppWrapper>
                <div className="section">
                    <h1 className="title">Page Title</h1>

                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.</p>
                </div>

                <div className="footer">
                    <p className="item">© 2025</p>

                </div>
            </AppWrapper>
        )
    }
}

export default App