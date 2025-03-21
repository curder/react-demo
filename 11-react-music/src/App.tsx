import { useRoutes } from 'react-router-dom'
import routers from '@/router'

function App() {
  return (
    <>
      <div className="App">Learn React</div>
      {useRoutes(routers)}
    </>
  )
}

export default App
