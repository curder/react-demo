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

### 3.1 `useState`

`useState` 是 React Hooks 中最常用的 Hook，它允许你在函数组件中添加 state。

- 接收的参数是初始化值，如果不设置是 `undefined`。
- 返回一个数组，第一个元素是当前 state 的值，第二个元素是更新 state 的函数。

### 3.2 `useEffect`

`useEffect` 是 React Hooks 中另一个常用的 Hook，它允许你在函数组件中执行副作用操作。

- 接收一个函数作为参数，这个函数会在组件渲染到屏幕之后执行。
- 可以返回一个函数，这个函数会在组件卸载时执行。

### 3.3 `useContext`

`useContext` 是 React Hooks 中用于访问 context 的 Hook。

- 接收一个 context 对象（由 React.createContext 创建）作为参数。
- 返回 context 对象的当前值。

### 3.4 `useReducer`

`useReducer` 是 React Hooks 中用于实现 reducer 的 Hook。

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
