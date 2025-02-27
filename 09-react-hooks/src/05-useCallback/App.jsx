import React, { memo, useCallback } from 'react'

const App = memo(() => {
    const [count, setCount] = React.useState(0)

    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [count])

    return (
        <div>
            <h1>useCallback</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
})

export default App