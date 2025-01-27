import { Component } from "react";

// 1. 第一步先执行构造方法：constructor
// 2. 第二步会执行 render 方法
// 3. 第三步会执行 componentDidMount 方法
class HelloWorld extends Component {
    constructor() {
        super();

        console.log("HelloWorld Component: constructor method");

        this.state = {
            message: "Hello World"
        }
    }

    render() {

        console.log("HelloWorld Component: render method");

        const { message } = this.state
        return (
            <div>{message}</div>
        )
    }

    componentDidMount() {
        console.log("HelloWorld Component: componentDidMount method");

    }
}

export default HelloWorld