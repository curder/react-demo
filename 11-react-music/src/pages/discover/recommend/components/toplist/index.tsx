import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ToplistWrapper } from './style'
import SectionHeader from '../section-header'
import ToplistItem from './item'
import { useAppSelector } from '@/store'

interface ToplistProps {
  children?: ReactNode
}

const Toplist: FC<ToplistProps> = (props) => {
  const { upToplist, newToplist, originToplist } = useAppSelector(
    (state) => state.recommend
  )

  return (
    <ToplistWrapper>
      <SectionHeader title="榜单" moreLink="/discover/toplist" />
      <div className="toplist-content">
        <ToplistItem item={upToplist} />
        <ToplistItem item={newToplist} />
        <ToplistItem item={originToplist} />
      </div>
    </ToplistWrapper>
  )
}

export default memo(Toplist)
