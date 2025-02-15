import React, { PureComponent } from 'react'
import Banner from './components/Banner'

import style from './App.module.css'

export class App extends PureComponent {
    render() {
        console.log(style)
        return (
            <div>
                <h2 className={style['page-title']}>Page Title</h2>

                <p className={style.content}>Page Content</p>

                <Banner />
            </div >
        )
    }
}

export default App