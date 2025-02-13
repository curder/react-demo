import React, { PureComponent } from 'react'
import WithThemeContext from './WithContext'

export class Header extends PureComponent {
  render() {
    const { themeColor } = this.props

    return (
      <div>

        <h2 style={{ color: themeColor }}>Header</h2>
      </div>
    )
  }
}


export default WithThemeContext(Header)