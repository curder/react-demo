import { configureStore } from '@reduxjs/toolkit'
import counter from './features/counter'

const store = configureStore({
    reducer: {
        counter
    },
    devTools: true
});

export default store