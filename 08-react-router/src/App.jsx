import React, { PureComponent } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

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
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          Content
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default App