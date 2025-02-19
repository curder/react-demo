const store = require('./store')

// 动态生成action
const changeNameAction = (name) => ({
    type: 'changeName',
    name,
})
const addNumberAction = (number) => ({
    type: 'addNumber',
    number,
})

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch(changeNameAction('lisi'))
store.dispatch(addNumberAction(10))
