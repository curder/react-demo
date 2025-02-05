import { Component } from "react";

// 1. 第一步先执行构造方法：constructor
// 2. 第二步会执行 render 方法
// 3. 第三步会执行 componentDidMount 方法
// 4. 当组件状态发生更新，第四步会执行 componentDidUpdate 方法
class HelloWorld extends Component {
    constructor() {
        super();

        console.log("HelloWorld Component: constructor method");

        this.state = {
            message: "Hello World"
        }
    }

    changeText() {
        this.setState({
            message: "Hello React"
        })
    }

    render() {

        console.log("HelloWorld Component: render method");

        const { message } = this.state
        return (
            <div>
                <h3>{message}</h3>
                <button onClick={e => this.changeText()}>Change Text</button>
            </div>
        )
    }

    // 组件被渲染到 DOM：被挂载到 DOM
    componentDidMount() {
        console.log("HelloWorld Component: componentDidMount method");
    }

    // 组件DOM更新完成：DOM 发生更新
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("HelloWorld Component: componentDidUpdate method", prevProps, prevState, snapshot);
    }

    // 组件从DOM中卸载掉：从 DOM 中移除
    componentWillUnmount() {
        console.log("HelloWorld Component: componentWillUnmount method");
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("HelloWorld Component: getSnapshotBeforeUpdate method");

        return {
            scrollPosition: 1000
        }
    }
}

export default HelloWorld