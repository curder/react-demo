import React, { PureComponent } from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <nav className="header">
          <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/home">Home</NavLink>
          <Link to="/about" >About</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path='' element={<Navigate to="/login" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default App