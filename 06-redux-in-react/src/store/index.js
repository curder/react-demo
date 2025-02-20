import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { thunk } from 'redux-thunk';
import counter from './features/counter'
import home from './features/home'

const rootReducer = combineReducers({ counter, home })

// 开发环境开启 Redux DevTools
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store