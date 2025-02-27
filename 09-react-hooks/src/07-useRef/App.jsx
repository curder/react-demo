import React, { memo, useRef } from 'react'

const App = memo(() => {
    const titleRef = useRef()
    const inputRef = useRef()


    const getDom = () => {
        console.log("titleRef.current: ", titleRef.current);
        console.log("titleRef.textContent: ", titleRef.current.textContent);
        console.log("titleRef.style: ", titleRef.current.style);
        console.log("titleRef.className: ", titleRef.current.className);

        console.log("inputRef.current: ", inputRef.current);
        console.log("inputRef.value: ", inputRef.current.value);
        inputRef.current.focus();
    }

    return (
        <div>
            <h2 ref={titleRef} className='title'>Hello world</h2>
            <input type="text" ref={inputRef} value="React" onChange={(e) => console.log(e.target.value)} />
            <button onClick={getDom}>get Dom</button>
        </div>
    )
})

export default App