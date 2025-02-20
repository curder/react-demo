import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCount } from '../store/features/counter'

export class Profile extends PureComponent {
    render() {
        const { count, recommends } = this.props

        return (
            <div>
                <h2>Count: {count}</h2>

                <button onClick={() => this.props.changeCount(-10)}>-10</button>


                <ul className="recommends">
                    {recommends.map(item => (<li key={item.acm}>{item.title}</li>))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
    recommends: state.home.recommends,
})

const mapDispatchToProps = (dispatch) => ({
    changeCount(number) {
        dispatch(changeCount(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)