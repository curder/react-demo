import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ToplistItemWrapper } from './style'

interface ToplistItemTrack {
  id: number
  name: string
}

export interface ToplistItem {
  id: number
  name: string
  coverImgUrl: string
  tracks: ToplistItemTrack[]
}

interface ToplistItemProps {
  children?: ReactNode
  item: ToplistItem
}

const ToplistItem: FC<ToplistItemProps> = (props) => {
  const { item } = props

  return <ToplistItemWrapper>{item.name}</ToplistItemWrapper>
}

export default memo(ToplistItem)
