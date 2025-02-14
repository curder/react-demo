import React, { createRef, PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
    constructor() {
        super()

        this.customRef = createRef()
        this.state = {
            books: [
                { id: 1, name: "Rust程序设计", price: 89.90, nodeRef: createRef() },
                { id: 2, name: "Python编程三剑客", price: 132.56, nodeRef: createRef() },
                { id: 3, name: "Java从入门到精通", price: 44.45, nodeRef: createRef() },
                { id: 4, name: '用Go语言开发命令行程序', price: 70.39, nodeRef: createRef() },
            ]
        }
    }

    addNewBook() {
        const id = new Date().getTime();
        const books = [...this.state.books];
        books.push({ id, name: "PHP从入门到精通", price: 54.66, nodeRef: createRef() })
        this.setState({ books })
    }

    removeBook(index) {
        const books = [...this.state.books]
        books.splice(index, 1)
        this.setState({ books })

    }

    render() {
        const { books } = this.state
        return (
            <div>
                <h2>Books</h2>
                <TransitionGroup component="ul">
                    {
                        books.map((book, index) => (
                            <CSSTransition nodeRef={book.nodeRef} key={book.id} timeout={1000} classNames="app">
                                <li ref={book.nodeRef}>
                                    <span>{book.name} - {book.price}</span>
                                    <button onClick={() => this.removeBook(index)}> &times; </button>
                                </li>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
                <button onClick={e => this.addNewBook(e)}>Add new</button>
            </div>
        )
    }
}

export default App