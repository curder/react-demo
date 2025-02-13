import React, { forwardRef, PureComponent } from 'react'

class Banner extends PureComponent {
    render() {
        return (
            <h2>Hello Banner</h2>
        )
    }
}

// 通过 forwardRef 函数包裹函数组件，使其支持 ref 属性
const Banner2 = forwardRef((props, ref) => {
    return (
        <h2 ref={ref}>Hello Banner2</h2>
    )
})

export class App extends PureComponent {
    constructor() {
        super()
        // 创建 ref 对象
        this.bannerRef = React.createRef()
        this.banner2Ref = React.createRef()
    }
    getComponent() {
        // 通过 ref 获取组件实例
        console.log(this.bannerRef.current)
        console.log(this.banner2Ref.current)
    }
    render() {
        return (
            <div>
                <Banner ref={this.bannerRef} />
                <Banner2 ref={this.banner2Ref} />
                <button onClick={e => this.getComponent()}>Get Component</button>
            </div>
        )
    }
}

export default App