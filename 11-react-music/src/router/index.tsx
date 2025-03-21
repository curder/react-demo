import { RouteObject } from 'react-router-dom'

import Discover from '@/pages/discover/recommend'
import My from '@/pages/my'
import Firend from '@/pages/firend'
import Download from '@/pages/download'

const routers: RouteObject[] = [
  { path: '/', element: <Discover /> },
  { path: '/my', element: <My /> },
  { path: '/friend', element: <Firend /> },
  { path: '/download', element: <Download /> }
]

export default routers
