import React, { PureComponent } from 'react'
import { changeCountAction } from '../store/features/counter'
import { connect } from 'react-redux'

export class Home extends PureComponent {
    render() {
        const { count, banners, changeCount } = this.props

        return (
            <div>
                <h2>{count}</h2>

                <button onClick={() => changeCount(1)}>+1</button>
                <button onClick={() => changeCount(10)}>+10</button>

                <div className="banners">
                    <ul>
                        {banners.map(banner => (
                            <li key={banner.acm}>{banner.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    count: state.counter.count,
    banners: state.home.banners,
})

let mapDispatchToProps = (dispatch) => ({
    changeCount(number) {
        dispatch(changeCountAction(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)