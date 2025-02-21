import React, { memo, useState } from 'react'

const CounterFunction = memo(() => {
    const [counter, setCounter] = useState(0)

    return (
        <div className='counter-function'>
            <h3>Counter Function</h3>
            <p>{counter}</p>

            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    )
})

export default CounterFunction