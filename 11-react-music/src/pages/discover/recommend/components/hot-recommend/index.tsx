import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeader from '../section-header'
import { hotRecommendItems } from '@/assets/data/local-data'
import { appShallowEqual, useAppSelector } from '@/store'

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
          return (
            <div className="item" key={item.id}>
              <img src={item.picUrl} alt="" />
              <div className="info">
                <span className="name">{item.name}</span>
                <span className="play-count">
                  <i className="sprite_icon2"></i>
                  {item.playCount}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
