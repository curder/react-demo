import { useRoutes } from 'react-router-dom'
import routers from '@/router'
import { Suspense } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PlayerBar from '@/pages/discover/song/player-bar'
function App() {
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
