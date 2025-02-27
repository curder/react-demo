# React Hooks

## 1. 什么是 React Hooks

React Hooks 是 React 16.8 引入的新特性，它允许在不编写 class 的情况下使用 state 以及其他的 React 特性。

## 2. 为什么需要 React Hooks

React Hooks 解决了 class 组件的一些问题：

1. **难以理解的 class**：class 组件需要理解 `this` 关键字，而 `this` 的行为有时会让人感到困惑。Hooks 允许在不使用 class 的情况下使用 state 以及其他的 React 特性。
2. **组件复用状态逻辑的困难**：在 React 的早期版本中，复用状态逻辑很困难，通常需要通过 render props 或者高阶组件（HOC）来实现。Hooks 允许通过自定义 Hook 来复用状态逻辑。
3. **复杂组件难以理解**：class 组件经常变得难以理解和维护，尤其是当它们变得很大的时候。Hooks 允许将组件拆分成更小的函数，从而使得组件更容易理解和维护。
4. **学习成本**：Hooks 使得 React 的学习曲线更加平缓，即使是没有 React 经验的开发者也可以快速上手。
5. **更好的代码组织**：Hooks 允许你在函数组件中使用 state 以及其他的 React 特性，使得代码更加简洁和易于组织。
6. **更好的代码可读性**：Hooks 使得代码更加简洁和易于理解，使得代码的可读性更高。

## 3. React Hooks 的使用

React Hooks 提供了以下几种常用的 Hooks：

1. `useState`：用于在函数组件中添加 state。
2. `useEffect`：用于在函数组件中执行副作用操作，例如数据获取、订阅或者手动更改 DOM。
3. `useContext`：用于在函数组件中访问 context。
4. `useReducer`：用于在函数组件中实现 reducer。
5. `useCallback`：用于在函数组件中缓存回调函数。
6. `useMemo`：用于在函数组件中缓存计算结果。
7. `useRef`：用于在函数组件中创建一个可变的 ref 对象。
8. 自定义 Hook：用于在函数组件中复用状态逻辑。
9. Redux 中的 `useSelector` 和 `useDispatch`：用于在函数组件中访问 Redux store和派发 action。
10. `useId`：用于在函数组件中生成唯一的 ID。
11. `useTransition`：用于在函数组件中实现过渡效果。

### 3.1 `useState`

`useState` 是 React Hooks 中最常用的 Hook，它允许你在函数组件中添加 state。

- 接收的参数是初始化值，如果不设置是 `undefined`。
- 返回一个数组，第一个元素是当前 state 的值，第二个元素是更新 state 的函数。


### 3.2 `useEffect`

`useEffect` 是 React Hooks 中另一个常用的 Hook，它允许在函数组件中执行副作用操作。

- 接收一个函数作为参数，这个函数会在组件渲染到屏幕之后执行。
- 第二个参数是一个数组，用于指定哪些 `state` 或者 `props` 改变时，才需要执行副作用操作。
  - 如果指定的 `state` 或 `props` 改变时，才需要执行副作用操作。
  - 如果不指定，则在每次渲染时都会执行。
  - 如果指定为空数组，则只在组件挂载和卸载时执行。
- 可以返回一个函数，这个函数会在组件更新、卸载时执行。

一个函数式组件中可以存在多个 `useEffect` 的调用，React 会按照调用顺序依次执行它们。比如网络请求、手动更改 DOM、订阅或者取消订阅等操作。


### 3.3 `useContext`

`useContext` 是 React Hooks 中用于访问 `context` 的 Hook。

- 接收一个 `context` 对象（由 React.createContext 创建）作为参数。
- 返回 `context` 对象的当前值。

> 当前的 `context` 值发生变化时，组件会重新渲染。

### 3.4 `useReducer`

`useReducer` 是 React Hooks 中用于实现 reducer 的 Hook。

当处理的 `state` 较复杂时，使用 `useReducer` 可以使代码更清晰、更易于维护，或者当修改的 `state` 有依赖于其他 `state` 时。

- 接收一个 reducer 函数和一个初始 state 作为参数。
- 返回一个数组，第一个元素是当前 state 的值，第二个元素是 dispatch 函数，用于分发 action。

### 3.5 `useCallback`

`useCallback` 是 React Hooks 中用于缓存回调函数的 Hook。

- 接收一个回调函数和一个依赖数组作为参数。
- 返回一个缓存后的回调函数。

### 3.6 `useMemo`

`useMemo` 是 React Hooks 中用于缓存计算结果的 Hook。

- 接收一个计算函数和一个依赖数组作为参数。
- 返回一个缓存后的计算结果。


### 3.7 `useRef`

`useRef` 是 React Hooks 中用于创建一个可变的 ref 对象的 Hook。

- 接收一个初始值作为参数。
- 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数。
- 可以用于保存任何可变的值，例如 DOM 元素、定时器 ID 等。

### 3.8 自定义 Hook

自定义 Hook 是一个函数，其名称以 `use` 开头，并且可以调用其他的 Hook。

自定义 Hook 可以将组件的逻辑提取出来，使得代码更加简洁和易于复用。

```js
function useCustomHook() {
  // ...
}
```

### 3.9 Redux 中的 `useSelector` 和 `useDispatch`

`useSelector` 和 `useDispatch` 是 Redux 提供的 Hooks，用于在函数组件中访问 Redux store 和派发 action。

- `useSelector` 接收一个 selector 函数作为参数，返回 store 中的 state。
- `useDispatch` 返回一个 dispatch 函数，用于派发 action。

```js
import { useSelector, useDispatch,shallowEqual } from 'react-redux';

function MyComponent() {
  const count = useSelector(state => state.count, shallowEqual);
  const dispatch = useDispatch();

  // ...
}
```

### 3.10 `useId`

`useId` 是 React Hooks 中用于生成唯一 ID 的 Hook。

- 返回一个唯一的 ID，每次渲染时都会生成一个新的 ID。

```js
import { useId } from 'react';

function MyComponent() {
  const id = useId();

  // ...
}
```

### 3.11 `useTransition`

`useTransition` 是 React Hooks 中用于实现过渡效果的 Hook。

- 接收一个布尔值作为参数，表示是否启用过渡效果。
- 返回一个数组，第一个元素是一个布尔值，表示是否正在进行过渡效果，第二个元素是一个函数，用于启动过渡效果。

```js
import { useTransition } from 'react';

function MyComponent() {
  const [isPending, startTransition] = useTransition();

  // ...
}
```

## 4. React Hooks 的注意事项

1. **只在最顶层使用 Hook**：不要在循环、条件判断或者嵌套函数中调用 Hook。
2. **只在 React 函数组件中调用 Hook**：不要在普通的 JavaScript 函数中调用 Hook。
3. **不要在自定义 Hook 中调用其他 Hook**：自定义 Hook 是一个函数，它可以在函数组件中调用其他的 Hook，但是不能在自定义 Hook 中调用其他的 Hook。
4. **不要在渲染过程中修改 state**：React Hooks 中的 state 是不可变的，每次更新 state 都会返回一个新的 state，而不是修改原来的 state。
5. **不要在渲染过程中调用副作用函数**：React Hooks 中的副作用函数会在每次渲染之后执行，如果在这个函数中修改了 state，可能会导致无限循环。
