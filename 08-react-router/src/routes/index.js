import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Posts from '../pages/Posts/Index'
import PostShow from '../pages/Posts/Show'
import HomeRecommand from '../pages/HomeRecommand'
import HomeRanking from '../pages/HomeRanking'

export const routes = [
    { path: '', element: <Navigate to="/login" /> },
    {
        path: '/home', element: <Home />, children: [
            { path: '', element: <Navigate to="/home/ranking" /> },
            { path: 'ranking', element: <HomeRanking /> },
            { path: 'recommend', element: <HomeRecommand /> },
        ]
    },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <PostShow /> },
    { path: '/about', element: <About /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },
]

export default routes