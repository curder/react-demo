# CSS in JS

CSS in JS 是指将 CSS 作为 JavaScript 的一部分来编写，而不是单独的 CSS 文件。

这种做法可以更好地利用 JavaScript 的特性，例如变量、函数、条件语句等，从而实现更灵活和可维护的样式编写方式。

## 1. styled-components

### 1.1. 安装

```bash
yarn add styled-components -D
```

### 1.2. 使用

```jsx
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 10px;
`

export default function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
    </div>
  )
}
```
