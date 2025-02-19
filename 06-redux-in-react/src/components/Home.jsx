import React, { PureComponent } from 'react'
import store from '../store'
import { changeCountAction } from '../store/actionCreators'
import { connect } from 'react-redux'
export class Home extends PureComponent {
    render() {
        const { count } = this.props

        return (
            <div>
                <h2>{count}</h2>

                <button onClick={() => store.dispatch(changeCountAction(1))}>+1</button>
                <button onClick={() => store.dispatch(changeCountAction(10))}>+10</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({ count: state.count })

export default connect(mapStateToProps)(Home)