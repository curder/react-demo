import { useAppDispatch } from '@/store'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannersDataAction } from './store/recommend'
import Banners from './components/banners'

interface RecommendProps {
  children?: ReactNode
}

const Recommend: FC<RecommendProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
  }, [])

  return (
    <>
      <Banners />
      <h2>Recommend</h2>
    </>
  )
}

export default memo(Recommend)
