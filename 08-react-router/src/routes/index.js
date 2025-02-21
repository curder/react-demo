import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Login = lazy(() => import('../pages/Login'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Posts = lazy(() => import('../pages/Posts/Index'))
const PostShow = lazy(() => import('../pages/Posts/Show'))
const HomeRecommand = lazy(() => import('../pages/HomeRecommand'))
const HomeRanking = lazy(() => import('../pages/HomeRanking'))

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