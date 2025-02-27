import React, { memo, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
    const [value, setValue] = React.useState(() => {
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initialValue
    })

    // const setLocalStorage = (newValue) => {
    //     setValue(newValue)
    //     localStorage.setItem(key, JSON.stringify(newValue))
    // }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
    // return [value, setLocalStorage]
}

const App = memo(() => {
    const [token, setToken] = useLocalStorage('token', '');

    return (
        <div>
            <h1>Token: {token || 'No token'}</h1>
            <button onClick={() => setToken('123456')}>Set new Token</button>
            <button onClick={() => setToken('')}>Remove Token</button>
        </div>
    )
})

export default App