import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import "normalize.css";
import '@/assets/less/index.less';
import App from '@/App';
import store from '@/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </StrictMode>
);

