import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './contexts'

const App = memo(() => {
    const { name, age } = useContext(UserContext)
    const { theme, fontSize } = useContext(ThemeContext)

    return (
        <div>
            <h1>useContext</h1>

            <p>User: {name} - {age}</p>

            <p>Theme: {theme} - {fontSize}</p>
        </div>
    )
})

export default App