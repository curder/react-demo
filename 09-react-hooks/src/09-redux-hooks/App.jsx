import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addAction, subAction } from './store/counter'

const App = memo(() => {
    // 1. 使用 useSelector 获取 state 中对应的数据
    const { count } = useSelector(state => ({
        count: state.counter.count,
    }), shallowEqual)

    // 2. 使用 useDispatch 获取 dispatch 函数
    const dispatch = useDispatch()

    // 3. 使用 dispatch 函数派发 action
    const changeCounter = (number, isAdd = true) => {
        isAdd ? dispatch(addAction(number)) : dispatch(subAction(number))
    }

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => changeCounter(1)}>+1</button>
            <button onClick={() => changeCounter(1, false)}>-1</button>
            <button onClick={() => changeCounter(5)}>+5</button>
            <button onClick={() => changeCounter(5, false)}>-5</button>
        </div>
    )
})

export default App