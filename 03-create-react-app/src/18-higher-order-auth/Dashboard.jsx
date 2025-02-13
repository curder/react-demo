import React, { PureComponent } from 'react'
import withAuth from './withAuth'

export class Dashboard extends PureComponent {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
            </div>
        )
    }
}

export default withAuth(Dashboard)