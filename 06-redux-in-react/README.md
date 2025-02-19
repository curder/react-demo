# Redux in react

使用下面的命令安装 Redux 插件：

```bash
yarn add redux react-redux -D
```

在入口文件中，使用 `Provider` 组件包裹整个应用，并将 Redux 的 `store` 传递给 `Provider` 组件。

```js
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

在类组件中，使用 `connect` 函数将组件与 Redux 的 `store` 连接起来，并获取 `store` 中的 `state` 和 `dispatch` 方法。

```js
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <div>Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

在函数组件中，使用 `useSelector` 和 `useDispatch` 钩子函数来获取 `store` 中的 `state` 和 `dispatch` 方法。

```js
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
```