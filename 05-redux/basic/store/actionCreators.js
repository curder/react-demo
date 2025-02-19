const changeNameAction = (name) => ({
    type: 'changeName',
    name,
})
const addNumberAction = (number) => ({
    type: 'addNumber',
    number,
})

module.exports = {
    changeNameAction,
    addNumberAction,
}