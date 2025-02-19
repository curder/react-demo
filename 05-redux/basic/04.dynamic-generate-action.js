const store = require('./store')
const { changeNameAction, addNumberAction } = require('./store/actionCreators')

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch(changeNameAction('lisi'))
store.dispatch(addNumberAction(10))
