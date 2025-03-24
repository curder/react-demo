import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { DiscoverWrapper } from './style'
import { discoverMenu } from '@/assets/data/local-data'

interface DiscoverProps {
  children?: ReactNode
}

const Discover: FC<DiscoverProps> = (props) => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="wrap-v1">
          <div className="nav">
            {discoverMenu.map((item) => {
              return (
                <div key={item.link} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
