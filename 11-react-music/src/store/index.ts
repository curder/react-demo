import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
// 导入您的 reducers
import counter from '@/store/modules/counter'
import recommend from '@/pages/discover/recommend/store/recommend'
import song from '@/pages/discover/song/store/song'

// 创建符合类型的 store
const store = configureStore({
  reducer: {
    counter,
    recommend,
    song
  }
})

// 导出 RootState 和 AppDispatch 类型
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// 使用 TypedUseSelectorHook 包装 useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// 使用 appShallowEqual 包装 shallowEqual
export const appShallowEqual = shallowEqual
// 使用 useDispatch 包装 dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
