const store = require('./store');

// 通过 dispatch 一个 action 修改 store 中的 name 属性
store.dispatch({ type: 'changeName', name: 'lisi' });
console.log(store.getState());

// 通过 dispatch 一个 action 修改 store 中的 count 属性
store.dispatch({ type: 'addNumber', number: 100 });
console.log(store.getState());