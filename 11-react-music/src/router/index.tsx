import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/pages/discover/recommend'))
const My = lazy(() => import('@/pages/my'))
const Friend = lazy(() => import('@/pages/firend'))
const Download = lazy(() => import('@/pages/download'))

const routers: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  { path: '/discover', element: <Discover /> },
  { path: '/my', element: <My /> },
  { path: '/friend', element: <Friend /> },
  { path: '/download', element: <Download /> }
]

export default routers
