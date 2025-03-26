import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ToplistWrapper } from './style'
import SectionHeader from '../section-header'

interface ToplistProps {
  children?: ReactNode
}

const Toplist: FC<ToplistProps> = (props) => {
  return (
    <ToplistWrapper>
      <SectionHeader title="榜单" moreLink="/discover/toplist" />
      <div className="toplist-content">
        
      </div>
    </ToplistWrapper>
  )
}

export default memo(Toplist)
