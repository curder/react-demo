// 编写 React 代码，并通过 React 渲染内容
import ReactDOM from 'react-dom/client';
// import App from './AppClass';
import App from './AppFunction';

ReactDOM
    .createRoot(document.querySelector("#root"))
    .render(<App />)