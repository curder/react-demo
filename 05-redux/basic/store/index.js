const { createStore } = require('redux')

// 初始化数据
const initialState = {
    name: 'zhangsan',
    count: 10,
}

// reducer 纯函数
const reducer = (state = initialState, action) => {
    return initialState
}

// 创建 store
const store = createStore(reducer)

module.exports = store