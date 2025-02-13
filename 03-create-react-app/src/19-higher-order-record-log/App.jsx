import React, { PureComponent } from 'react'
import recordLog from './recordLog'

export class App extends PureComponent {


  render() {
    return (
      <div>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
          <li>item5</li>
          <li>item6</li>
          <li>item7</li>
          <li>item8</li>
          <li>item9</li>
          <li>item10</li>
        </ul>
      </div>
    )
  }
}

export default recordLog(App)