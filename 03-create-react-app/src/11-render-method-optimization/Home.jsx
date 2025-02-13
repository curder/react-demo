import React, { Component } from 'react'

export class Home extends Component {

    // shouldComponentUpdate接收两个参数：nextProps 和 nextState
    // nextProps：下一个属性对象
    // nextState：下一个状态对象
    shouldComponentUpdate(nextProps, nextState) {
        // 返回一个布尔值，表示是否需要更新组件
        // 返回 true：表示需要更新组件，会调用 render 方法重新渲染组件
        // 返回 false：表示不需要更新组件，不会调用 render 方法
        return nextProps.message !== this.props.message
    }

    render() {
        console.log('Home Component Rendered')
        const { message } = this.props
        return (
            <div>{message}</div>
        )
    }
}

export default Home