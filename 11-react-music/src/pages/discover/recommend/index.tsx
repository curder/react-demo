import { useAppDispatch } from '@/store'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchBannersDataAction,
  fetchHotRecommendsAction
} from './store/recommend'
import TopBanners from '@/pages/discover/recommend/components/top-banners'
import {
  RecommendLeft,
  RecommendRight,
  RecommendSection,
  RecommendWrapper
} from './style'
import HotRecommend from '@/pages/discover/recommend/components/hot-recommend'
import NewAlbum from './components/new-album'

interface RecommendProps {
  children?: ReactNode
}

const Recommend: FC<RecommendProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
    dispatch(fetchHotRecommendsAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanners />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight>Right</RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
