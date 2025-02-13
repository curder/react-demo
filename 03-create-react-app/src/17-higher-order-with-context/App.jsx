import React, { PureComponent } from 'react'
import ThemeContext from './ThemeContext'
import Header from './Header'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <ThemeContext.Provider value={{ themeColor: 'red' }}>
                    <Header />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default App