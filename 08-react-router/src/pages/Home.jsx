import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
    render() {
        return (
            <>
                <h2>Home</h2>

                <ul>
                    <li>
                        <Link to='/home/ranking'>Ranking</Link>
                        <Link to='/home/recommend'>Recommend</Link>
                    </li>
                </ul>

                <Outlet />
            </>
        )
    }
}

export default Home