import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/pages/discover/index')) // 发现音乐 - 推荐
const Recommend = lazy(() => import('@/pages/discover/recommend')) // 发现音乐 - 推荐
const Toplist = lazy(() => import('@/pages/discover/toplist')) // 发现音乐 - 排行榜
const Playlist = lazy(() => import('@/pages/discover/playlist')) // 发现音乐 - 歌单
const Djradio = lazy(() => import('@/pages/discover/djradio')) // 发现音乐 - 主播电台
const Artist = lazy(() => import('@/pages/discover/artist')) // 发现音乐 - 歌手
const Album = lazy(() => import('@/pages/discover/album')) // 发现音乐 - 新碟上架
const My = lazy(() => import('@/pages/my')) // 我的音乐
const Friend = lazy(() => import('@/pages/firend')) // 关注
const Download = lazy(() => import('@/pages/download')) // 下载客户端

const routers: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Recommend /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/toplist', element: <Toplist /> },
      { path: '/discover/playlist', element: <Playlist /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/album', element: <Album /> }
    ]
  },
  { path: '/my', element: <My /> },
  { path: '/friend', element: <Friend /> },
  { path: '/download', element: <Download /> }
]

export default routers
