import React from 'react'
import ReactDOM from 'react-dom/client'
// import { UserContext, ThemeContext } from './03-useContext/contexts'
// import { Provider } from 'react-redux'
// import store from './09-redux-hooks/store'
import App from './10-useId/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <UserContext.Provider value={{ name: 'Zhangsan', age: 18 }}>
  //     <ThemeContext.Provider value={{ theme: 'dark', fontSize: '16px' }}>

  // <Provider store={store}>
  <App />
  // </Provider>
  // </ThemeContext.Provider>
  // </UserContext.Provider>
  // </React.StrictMode>
);