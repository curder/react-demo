import React, { memo } from 'react'
import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'

const Counter = memo(() => {
    return (
        <div>
            <h2>Counter</h2>
            <CounterClass />
            <CounterFunction />
        </div>
    )
})

export default Counter