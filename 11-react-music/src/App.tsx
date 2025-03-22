import { useRoutes } from 'react-router-dom'
import routers from '@/router'
import { Suspense } from 'react'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Suspense fallback="Loading...">{useRoutes(routers)}</Suspense>
      <Footer />
    </>
  )
}

export default App
