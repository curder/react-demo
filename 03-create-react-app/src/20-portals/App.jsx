import React, { PureComponent } from 'react'
import Modal from './Modal'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>App Component</h1>

                <Modal>
                    <h1 className='title'> Modal title</h1>
                    <div className="modal-container">
                        Modal Container
                    </div>
                </Modal>
            </div>
        )
    }
}

export default App