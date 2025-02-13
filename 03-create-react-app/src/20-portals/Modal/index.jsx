import { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import './style.css'

export class Modal extends PureComponent {
  render() {
    return (
      createPortal(this.props.children, document.querySelector('#modals'))
    )
  }
}

export default Modal