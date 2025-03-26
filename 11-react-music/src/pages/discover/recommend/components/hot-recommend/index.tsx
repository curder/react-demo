import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeader from '../section-header'
import { hotRecommendItems } from '@/assets/data/local-data'
import { appShallowEqual, useAppSelector } from '@/store'
import SongItem from '@/components/song-item'

interface HotRecommendProps {
  children?: ReactNode
}

const HotRecommend: FC<HotRecommendProps> = (props) => {
  const hotRecommends = useAppSelector(
    (state) => state.recommend.hotRecommends,
    appShallowEqual
  )

  return (
    <HotRecommendWrapper>
      <SectionHeader
        title="热门推荐"
        items={hotRecommendItems}
        moreLink="/discover/playlist"
      />
      <div className="hot-recommends">
        {hotRecommends.map((item) => {
          return <SongItem key={item.id} item={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
