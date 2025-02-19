const store = require('./store')

// 通过 subscribe 监听 store 的变化
const unsubscribe = store.subscribe(() => {
    console.log('store changed:', store.getState())
})

store.dispatch({ type: 'changeName', name: 'lisi' })
console.log(store.getState())

// 取消订阅
unsubscribe()
store.dispatch({ type: 'addNumber', number: 10 })
console.log(store.getState())
