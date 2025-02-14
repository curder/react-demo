import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            books: [
                { id: 1, name: "Rust程序设计", price: 89.90 },
                { id: 2, name: "Python编程三剑客", price: 132.56 },
                { id: 3, name: "Java从入门到精通", price: 44.45 },
                { id: 4, name: '用Go语言开发命令行程序', price: 70.39 },
            ]
        }
    }

    addNewBook() {
        const id = this.state.books.length + 1
        const books = [...this.state.books];
        books.push({ id, name: "PHP从入门到精通", price: 54.66 })
        console.log(books)
        this.setState({ books })
    }

    render() {
        const { books } = this.state
        return (
            <div>
                <h2>Books</h2>
                <ul>
                    {
                        books.map(book => (
                            <li key={book.id}>{book.name} - {book.price}</li>
                        ))
                    }
                </ul>

                <button onClick={e => this.addNewBook(e)}>Add new</button>
            </div>
        )
    }
}

export default App