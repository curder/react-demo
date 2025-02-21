import React, { PureComponent } from 'react'
import withRouter from '../../hocs/withRouter'

export class Show extends PureComponent {
    render() {
        const { id } = this.props.router.params
        return (
            <div>
                <h2>Post show</h2>
                <p>Post id: {id}</p>
            </div>
        )
    }
}

export default withRouter(Show)