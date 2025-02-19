import React, { PureComponent } from 'react'
import store from '../store'
import { changeCountAction } from '../store/actionCreators'

export class Home extends PureComponent {

    constructor() {
        super()

        this.state = {
            count: store.getState().count
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count
            })
        })
    }

    render() {
        const { count } = this.state

        return (
            <div>
                <h2>{count}</h2>

                <button onClick={() => store.dispatch(changeCountAction(1))}>+1</button>
                <button onClick={() => store.dispatch(changeCountAction(10))}>+10</button>
            </div>
        )
    }
}

export default Home