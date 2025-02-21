import React from 'react'
import routes from './routes'
import { Link, NavLink, useRoutes } from 'react-router-dom';


export function App() {
  return (
    <>
      <nav className="header">
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/home">Home</NavLink>
        <Link to="/about" >About</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer">
        Footer
      </div>
    </>
  );
}

export default App