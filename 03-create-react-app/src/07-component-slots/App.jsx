import React, { Component } from 'react'
import NavBarChildren from './NavbarChildren'
import NavBarProps from './NavbarProps'

export class App extends Component {
    render() {
        return (
            <div>
                <NavBarChildren>
                    <button>Button</button>
                    <h2>I am Title</h2>
                    <i>Fonts</i>
                </NavBarChildren>
                <hr />
                <NavBarProps
                    left={<button>Button</button>}
                    center={<h2>I am Title</h2>}
                    right={<i>Fonts</i>}
                />
            </div>
        )
    }
}

export default App