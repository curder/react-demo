import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongItemWrapper } from './style'
import { formatCount, formatImageSize } from '@/utils/format'

interface SongItemProps {
  children?: ReactNode
  item: SongItem
}
export interface SongItem {
  id: number
  name: string
  picUrl: string
  playCount: number
}

const SongItem: FC<SongItemProps> = (props) => {
  const { item } = props

  return (
    <SongItemWrapper>
      <div className="cover-top">
        <img src={formatImageSize(item.picUrl, 140)} alt={item.name} />

        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(item.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{item.name}</div>
    </SongItemWrapper>
  )
}

export default memo(SongItem)
