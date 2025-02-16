# CSS in JS

CSS in JS 是指将 CSS 作为 JavaScript 的一部分来编写，而不是单独的 CSS 文件。

这种做法可以更好地利用 JavaScript 的特性，例如变量、函数、条件语句等，从而实现更灵活和可维护的样式编写方式。

## 1. [styled-components](https://styled-components.com/docs/basics#installation)

### 1.1. 安装

```bash
yarn add styled-components -D
```

### 1.2. 基本使用

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

> 如果使用的是 VSCode 编辑器编写代码，建议搭配 [`vscode-styled-components`](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) 插件，可以提供更好的语法高亮和代码提示功能。

### 1.3. 传递样式

使用 `props` 可以传递样式，方便在 JS 中编写样式逻辑。例如：

```jsx
const Button = styled.button`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  padding: 10px;
`

export default function App() {
  return (
    <div className="App">
      <Button bgcolor="blue" color="white" size={30}>按钮</Button>
    </div>
  )
}
```

### 1.4. 传递属性

使用 `attrs` 方法可以传递属性，方便在 JS 中编写样式逻辑。例如：

```jsx
const Button = styled.button.attrs(props => ({
  size: props.size || 20,  // 默认大小为 20，当 Button 样式组件没有传递 size 属性时，使用默认值
  color: props.color || 'white',
  backgroundColor: props.backgroundColor || 'red',
}))`

  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  padding: 10px;
`

export default function App() {
  return (
    <div className="App">
      <Button size={30} color="black" backgroundColor="blue">按钮</Button>
      <Button>默认按钮样式</Button>
  )
}
```

### 1.5. 引入外部样式变量

通过定义统一的样式变量文件，可以方便地在多个组件中复用样式变量。后续需要修改时可以在定义处快速进行修改，例如：

```jsx
// styles.js
export const colors = {
  primary: 'red',
  secondary: 'blue',
  white: 'white',
  black: 'black',
}

// Button.js
import styled from 'styled-components'
import { colors } from './styles'

const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 20px;
  padding: 10px;
`

export default Button

// App.js
import Button from './Button'

export default function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
    </div>
  )
}
```


### 1.6. 样式继承

使用 `extend` 方法可以实现样式的继承，方便在 JS 中编写样式逻辑。例如：

```jsx
export const Button = styled.button.attrs(props => ({
  size: props.size || 20,  // 默认大小为 20，当 Button 样式组件没有传递 size 属性时，使用默认值
  color: props.color || 'white',
  backgroundColor: props.backgroundColor || 'red',
}))
`

export const PrimaryButton = styled(Button)`
  border-radius: 5px;
`

export default function App() {
  return (
    <div className="App">
      <Button size={30} color="black" backgroundColor="blue">按钮</Button>
      <Button>默认按钮样式</Button>
      <PrimaryButton>PrimaryButton</PrimaryButton>
  )
}
```

### 1.7. 设置主题

使用 `ThemeProvider` 组件可以设置全局的主题变量，方便在多个组件中复用样式变量。例如：

```jsx
// Button.js
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.sizes.medium}px;
  padding: 10px;
`

export default Button


// App.jsx
import Button from './Button'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: 'red',
    secondary: 'blue',
    white: 'white',
    black: 'black',
  },
  sizes: {
    small: 12,
    medium: 16,
    large: 24,
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button size={30} color="black" backgroundColor="blue">按钮</Button>
        <Button>默认按钮样式</Button>
      </div>
    </ThemeProvider>
  )
}
```