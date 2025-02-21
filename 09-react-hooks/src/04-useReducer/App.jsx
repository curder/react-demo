import React, { memo, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1, year: state.year + 1 }
        case 'decrement':
            return { ...state, counter: state.counter - 1, year: state.year - 1 }
        case 'incrementBy':
            return { ...state, counter: state.counter + action.payload, year: state.year + action.payload }
        case 'decrementBy':
            return { ...state, counter: state.counter - action.payload, year: state.year - action.payload }
        case 'reset':
            return { ...state, counter: 0, year: new Date().getFullYear() }
        default:
            return state
    }
}

const App = memo(() => {
    const [state, dispatch] = useReducer(reducer, { counter: 0, year: new Date().getFullYear() })
    const { counter, year } = state

    return (
        <div>
            <h1>Counter: {counter} <br />Year: {year}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
            <button onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}>+5</button>
            <button onClick={() => dispatch({ type: 'decrementBy', payload: 5 })}>-5</button>
            <button onClick={() => dispatch({ type: 'incrementBy', payload: 10 })}>+10</button>
            <button onClick={() => dispatch({ type: 'decrementBy', payload: 10 })}>-10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div >
    )
})

export default App