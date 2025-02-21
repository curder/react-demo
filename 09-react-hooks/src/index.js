import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './03-useContext/App';
import { UserContext, ThemeContext } from './03-useContext/contexts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: 'Zhangsan', age: 18 }}>
      <ThemeContext.Provider value={{ theme: 'dark', fontSize: '16px' }}>
        <App />
      </ThemeContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);