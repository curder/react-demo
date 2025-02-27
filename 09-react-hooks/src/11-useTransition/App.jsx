import React, { memo, useTransition } from 'react'
import usernames from './usernames'

const App = memo(() => {
    const [names, setName] = React.useState(usernames)
    const [isPending, startTransition] = useTransition();

    const search = (value) => {
        const filteredNames = usernames.filter(item => item.includes(value));
        // setName(filteredNames)

        startTransition(() => {
            setName(filteredNames)
        })
    }

    return (
        <div>
            <input type="text" onChange={e => search(e.target.value)} />

            <ul>
                {isPending && <li>Loading...</li>}

                {!isPending && names.map((username, index) => <li key={index}>{username}</li>)}
            </ul>

        </div>
    )
})

export default App