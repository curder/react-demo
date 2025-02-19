const { CHANGE_NAME, ADD_NUMBER } = require('./constants')
const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    name,
})
const addNumberAction = (number) => ({
    type: ADD_NUMBER,
    number,
})

module.exports = {
    changeNameAction,
    addNumberAction,
}