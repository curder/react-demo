import React, { PureComponent } from 'react'
import EnhancedProps from './hoc/enhancedProps'

export class Banner extends PureComponent {
    render() {

        return (
            <div>
                <h2>Banner</h2>
                <p>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
            </div>
        )
    }
}

export default EnhancedProps(Banner)