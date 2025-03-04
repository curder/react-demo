import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

const App = memo(() => {
    return (
        <div className='app'>
            <div className="header">Header</div>
            <div className="contant">
                {useRoutes(routes)}
            </div>
            <div className="footer">div</div>
        </div>
    )
})

export default App