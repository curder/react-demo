import React from "react";

export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            message: "Hello React"
        }
    }
    render() {
        const { message } = this.state;
        return (
            <div>
                <h2>{message}</h2>
            </div>
        )
    }
}

export default App;
