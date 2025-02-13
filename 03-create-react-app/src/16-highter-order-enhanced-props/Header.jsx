import React from 'react'
import EnhancedProps from './hoc/enhancedProps'

function Header(props) {
    return (
        <div>
            <h2>Header</h2>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    )
}

export default EnhancedProps(Header)