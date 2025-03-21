import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
// 导入您的 reducers
import counter from './modules/counter'

// 创建符合类型的 store
const store = configureStore({
  reducer: {
    counter
  }
})

// 导出 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
