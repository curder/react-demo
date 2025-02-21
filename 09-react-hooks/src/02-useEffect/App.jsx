import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
    const [count, setCount] = useState(100)

    // 更新文档标题，当 count 变化时触发
    useEffect(() => {
        document.title = count

        console.log('更新文档标题')

        // 清除副作用
        return () => {
            console.log("清除副作用")
        }
    })

    // 模拟网络请求，传入空数组，只执行一次
    useEffect(() => {
        console.log("模拟网络请求")

        return () => {
            console.log("清除网络请求")
        }
    }, [])

    return (
        <div>
            <h1>useEffect</h1>

            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
})

export default App