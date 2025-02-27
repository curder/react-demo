import React, { memo, useId } from 'react'

const App = memo(() => {
    // useId() 会返回一个唯一的 id
    const usernameId = useId();

    return (
        <div>
            <label htmlFor={usernameId}>
                Username: <input type="text" id={usernameId} />
            </label>
        </div>
    )
})

export default App