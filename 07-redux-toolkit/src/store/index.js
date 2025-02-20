import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import homeReducer from './features/home'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: homeReducer,
    },
    devTools: true
});

export default store