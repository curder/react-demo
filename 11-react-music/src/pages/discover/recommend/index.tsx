import { useAppDispatch } from '@/store'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchRecommendsAction } from './store/recommend'
import TopBanners from '@/pages/discover/recommend/components/top-banners'
import {
  RecommendLeft,
  RecommendRight,
  RecommendSection,
  RecommendWrapper
} from './style'
import HotRecommend from '@/pages/discover/recommend/components/hot-recommend'
import NewAlbum from '@/pages/discover/recommend/components/new-album'
import Toplist from '@/pages/discover/recommend/components/toplist'

interface RecommendProps {
  children?: ReactNode
}

const Recommend: FC<RecommendProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendsAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanners />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Toplist />
        </RecommendLeft>
        <RecommendRight>Right</RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
