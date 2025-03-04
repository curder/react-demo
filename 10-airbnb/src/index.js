import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "normalize.css";
import '@/assets/index.less';
import App from '@/App';
import store from '@/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);

