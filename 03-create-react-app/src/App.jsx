import { Component } from "react"



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
            <h1>{message}</h1>
        )
    }
}

export default App;