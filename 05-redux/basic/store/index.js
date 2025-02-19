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
    // 根据不同的 action.type，返回不同的 state
    switch (action.type) {
        case 'changeName':
            return { ...state, name: action.name }
        case 'addNumber':
            return { ...state, count: state.count + action.number }
        default:
            return state
    }
}

// 创建 store
const store = createStore(reducer)

module.exports = store