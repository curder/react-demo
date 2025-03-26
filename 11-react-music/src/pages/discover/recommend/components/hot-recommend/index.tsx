import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeader from '../section-header'
import { hotRecommendItems } from '@/assets/data/local-data'

interface HotRecommendProps {
  children?: ReactNode
}

const HotRecommend: FC<HotRecommendProps> = (props) => {
  return (
    <HotRecommendWrapper>
      <SectionHeader
        title="热门推荐"
        items={hotRecommendItems}
        moreLink="/discover/playlist"
      />
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
