import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }



    render() {
        const { isLoggedIn } = this.state

        return (
            <>
                <h2>Login</h2>

                {
                    !isLoggedIn ? <button onClick={() => this.setState({ isLoggedIn: true })}> Login now</button> : <Navigate to="/home" />
                }

            </>
        )
    }
}

export default Login