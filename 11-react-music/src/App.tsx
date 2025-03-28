import { useRoutes } from 'react-router-dom'
import routers from '@/router'
import '@ant-design/v5-patch-for-react-19'
import { Suspense, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PlayerBar from '@/pages/discover/song/player-bar'
function App() {
  // // 获取某首歌
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchCurrentSongAction(453268268))
  // }, [])

  return (
    <>
      <Header />
      <Suspense fallback="Loading...">{useRoutes(routers)}</Suspense>
      <Footer />

      {/* 播放器工具栏 */}
      <PlayerBar />
    </>
  )
}

export default App
