import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface RecommendProps {
  children?: ReactNode
}

const Recommend: FC<RecommendProps> = (props) => {
  return (
    <>
      <h2>Recommend</h2>
    </>
  )
}

export default memo(Recommend)
