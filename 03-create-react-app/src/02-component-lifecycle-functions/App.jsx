import { Component } from "react"
import HelloWorld from "./HelloWorld"

class App extends Component {
    constructor() {
        super()

        this.state = {
            isShowHelloWorld: true,
        }
    }

    isShowHelloWorld() {
        this.setState({
            isShowHelloWorld: !this.state.isShowHelloWorld
        })
    }

    render() {
        const { isShowHelloWorld } = this.state;
        return (
            <div>
                {isShowHelloWorld && <HelloWorld />}
                <button onClick={e => this.isShowHelloWorld()}>Toggle Component</button>
            </div>
        )
    }
}

export default App;