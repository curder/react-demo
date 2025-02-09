// 编写 React 代码，并通过 React 渲染内容
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import App from './07-component-slots/App';

ReactDOM
    .createRoot(document.querySelector("#root"))
    .render(
        <StrictMode>
            <App />
        </StrictMode>
    ) 