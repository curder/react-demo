import React, { memo, useMemo, useState } from 'react'

// 计算1-50之间的和
const sum = (num) => {
    console.log("sum function called.")
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

const App = memo(() => {
    const [counter, setCounter] = useState(0);

    // useMemo: 用来缓存计算结果，只有当依赖项发生变化时，才会重新计算
    const result = useMemo(() => sum(50), []);

    return (
        <div>
            <h2>{result}</h2>

            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
})

export default App