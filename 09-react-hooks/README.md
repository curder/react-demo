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