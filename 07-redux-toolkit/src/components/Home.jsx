import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCount } from '../store/features/counter'

export class Home extends PureComponent {
    render() {
        const { count, banners } = this.props
        return (
            <div>
                <h2>Count: {count}</h2>

                <button onClick={() => this.props.changeCount(1)}>+1</button>
                <button onClick={() => this.props.changeCount(5)}>+5</button>

                <ul className="banners">
                    {banners.map(item => (<li key={item.acm}>{item.title}</li>))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
    banners: state.home.banners,
})

const mapDispatchToProps = (dispatch) => ({
    changeCount(number) {
        dispatch(changeCount(number))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)