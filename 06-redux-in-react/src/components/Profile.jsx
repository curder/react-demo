import React, { PureComponent } from 'react'
import store from "../store"
import { changeCountAction } from '../store/actionCreators'

export class Profile extends PureComponent {
    constructor() {
        super()

        this.state = {
            count: store.getState().count,
        }
    }
    componentDidMount() {
        store.subscribe(() => this.setState({
            count: store.getState().count,
        }))
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={() => store.dispatch(changeCountAction(-1))}>-1</button>
                <button onClick={() => store.dispatch(changeCountAction(-5))}>-5</button>

            </div>
        )
    }
}

export default Profile