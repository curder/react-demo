import React, { Component } from 'react'
import ThemeContext from './contexts/theme'
import UserContext from './contexts/user'

export class HomeContainer extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        HomeContainer
        <UserContext.Consumer>
          {user => {
            return (
              <div>
                <p>Username: {user.name}</p>
                <p>Age: {user.age}</p>
              </div>
            )
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}

HomeContainer.contextType = ThemeContext

export default HomeContainer