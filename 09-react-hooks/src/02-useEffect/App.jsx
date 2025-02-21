import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
    const [count, setCount] = useState(100)

    // 更新文档标题，当 count 变化时触发
    useEffect(() => {
        document.title = count
    })

    return (
        <div>
            <h1>useEffect</h1>

            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
})

export default App