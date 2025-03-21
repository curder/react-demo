import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface DiscoverProps {
  children?: ReactNode
}

const Discover: FC<DiscoverProps> = (props) => {
  return (
    <>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/toplist">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  )
}

export default memo(Discover)
