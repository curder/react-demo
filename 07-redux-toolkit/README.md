# Redux toolkit

```bash
yarn add @reduxjs/toolkit react-redux axios -D
```
 
Redux Toolkit 的核心API主要是如下几个：

- `configureStore`：包装 createStore 以提供简化的配置选项和良好的默认值。它可以自动组合 `slice reducer`, 添加提供的任何 Redux 中间件, `redux-thunk` 默认包含, 并启用 Redux DevTools 扩展

- `createSlice`：接受 reducer 函数的对象、切片名称和初始状态值, 并自动生成切片 reducer, 并带有相应的 actions。

- `createAsyncThunk`：接受一个动作类型字符串和一个返回承诺的函数, 并生成一个 `pending`、`fulfilled`、`rejected` 基于该承诺分派动作类型的 thunk