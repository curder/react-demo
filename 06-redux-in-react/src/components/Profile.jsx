import React, { PureComponent } from 'react'
import { changeCountAction } from '../store/actionCreators'
import { connect } from 'react-redux'

export class Profile extends PureComponent {

    render() {
        const { count, changeCount } = this.props

        return (
            <div>
                <h2>{count}</h2>

                <button onClick={() => changeCount(-1)}>-1</button>
                <button onClick={() => changeCount(-5)}>-5</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ count: state.count })

const mapDispatchToProps = (dispatch) => ({
    changeCount(number) {
        dispatch(changeCountAction(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)