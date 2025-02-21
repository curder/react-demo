import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import withRouter from '../../hocs/withRouter'

export class Index extends PureComponent {

    constructor() {
        super()
        this.state = {
            posts: [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' },
                { id: 3, title: 'Post 3' },
            ]
        }
    }

    navigateToPost = (id) => {
        const { navigate } = this.props.router

        navigate(`/posts/${id}`)
    }

    render() {
        const { posts } = this.state

        return (
            <div>
                <h2>Post index</h2>

                <ul>
                    {posts.map(post => {
                        return <li key={post.id}>
                            <button onClick={() => this.navigateToPost(post.id)}>{post.title}</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(Index)