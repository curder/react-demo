import React, { PureComponent } from 'react'
import { changeCountAction } from '../store/features/counter'
import { connect } from 'react-redux'

export class Profile extends PureComponent {

    render() {
        const { count, recommends, changeCount } = this.props

        return (
            <div>
                <h2>{count}</h2>

                <button onClick={() => changeCount(-1)}>-1</button>
                <button onClick={() => changeCount(-5)}>-5</button>

                <ul>
                    {
                        recommends.map(item => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
    recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch) => ({
    changeCount(number) {
        dispatch(changeCountAction(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)