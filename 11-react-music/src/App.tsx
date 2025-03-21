import { Link, useRoutes } from 'react-router-dom'
import routers from '@/router'
import { Suspense } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { incrementAction } from '@/store/modules/counter'

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    appShallowEqual
  )

  const dispatch = useAppDispatch()

  return (
    <>
      <div className="App">
        <div className="nav">
          <Link to="/discover">发现音乐</Link>
          <Link to="/my">我的音乐</Link>
          <Link to="/friend">关注</Link>
          <Link to="/download">下载客户端</Link>
        </div>
      </div>

      <h2>当前计数：{count}</h2>
      <button onClick={(e) => dispatch(incrementAction())}>自增</button>

      <Suspense fallback="Loading...">{useRoutes(routers)}</Suspense>
    </>
  )
}

export default App
