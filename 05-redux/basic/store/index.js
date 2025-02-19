const { createStore } = require('redux')

// 初始化数据
const initialState = {
    name: 'zhangsan',
    count: 10,
}

// reducer 纯函数，接收 state 和 action，返回新的 state
// 参数一：初始化数据
// 参数二：action（通过 dispatch 传入的 action）
// 返回值：新的 state
const reducer = (state = initialState, action) => {
    if (action.type === 'changeName') {
        return { ...state, name: action.name }
    } else if (action.type === 'addNumber') {
        return { ...state, count: state.count + action.number }
    }

    return initialState
}

// 创建 store
const store = createStore(reducer)

module.exports = store