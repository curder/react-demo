import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapper } from './style'
import RightSectionHeader from '../right-section-header'

interface HotAnchorProps {
  children?: ReactNode
}

const HotAnchor: FC<HotAnchorProps> = (props) => {
  return <HotAnchorWrapper>
    <RightSectionHeader title="热门主播" />
  </HotAnchorWrapper>
}

export default memo(HotAnchor)
