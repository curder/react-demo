import React, { PureComponent } from 'react'
import { AppWrapper, Button, PrimaryButton, SectionWrapper } from './style'
import { ThemeProvider } from 'styled-components'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            titleSize: '50'
        }
    }
    render() {
        const { titleSize } = this.state
        return (
            <ThemeProvider theme={{ titleSize }}>
                <AppWrapper>
                    <SectionWrapper $titleSize={titleSize}>
                        <h1 className="title">Page Title</h1>

                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.</p>
                    </SectionWrapper>

                    <Button $backgroundColor="blue" color="white" size={30}>按钮</Button>
                    <Button>默认按钮样式</Button>
                    <PrimaryButton>PrimaryButton</PrimaryButton>
                    <div className="footer">
                        <p className="item">© 2025</p>
                    </div>
                </AppWrapper>
            </ThemeProvider>
        )
    }
}

export default App