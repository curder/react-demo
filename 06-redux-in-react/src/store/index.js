import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk';
import rootReducer from './reducers'

// 开发环境开启 Redux DevTools
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store