import React, { Component } from 'react'
import TabControl from './TabControl';

export class App extends Component {

    constructor() {
        super();

        this.state = {
            currentTab: 0,
            titles: ['流行', '新款', '精选'],
        }
    }

    tabChanged(currentTab) {
        this.setState({
            currentTab,
        })
    }

    render() {
        const { currentTab, titles } = this.state;

        return (
            <div>
                <TabControl
                    changeTab={(i) => this.tabChanged(i)}
                    titles={titles} />
                <h1>{titles[currentTab]}</h1>
            </div>
        )
    }
}

export default App