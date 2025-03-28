import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapper } from './style'
import RightSectionHeader from '../right-section-header'
import { hotAnchors } from '@/assets/data/local-data'

interface HotAnchorProps {
  children?: ReactNode
}

const HotAnchor: FC<HotAnchorProps> = (props) => {
  return (
    <HotAnchorWrapper>
      <RightSectionHeader title="热门主播" />
      <div className="anchor-list">
        {hotAnchors.map((anchor) => {
          return (
            <div className="anchor" key={anchor.picUrl}>
              <a href="/discover/djradio" className="image">
                <img src={anchor.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{anchor.name}</div>
                <div className="position text-no-wrap">{anchor.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
