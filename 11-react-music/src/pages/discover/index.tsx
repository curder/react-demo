import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { DiscoverWrapper } from './style'
import { discoverMenu } from '@/assets/data/local-data'

interface DiscoverProps {
  children?: ReactNode
}

const Discover: FC<DiscoverProps> = (props) => {
  return (
    <DiscoverWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item">
              <NavLink key={item.link} to={item.link}>
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
