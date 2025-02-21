import ReactDOM from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </StrictMode>
);