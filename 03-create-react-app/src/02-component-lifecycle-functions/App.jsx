import { Component } from "react"
import HelloWorld from "./HelloWorld"

class App extends Component {
    constructor() {
        super()

        this.state = {
            message: "Hello React"
        }
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <HelloWorld />
                <h1>{message}</h1>
            </div>

        )
    }
}

export default App;