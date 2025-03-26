import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongItemWrapper } from './style'
import { Link } from 'react-router-dom'

interface SongItemProps {
  children?: ReactNode
  item: any
}

const SongItem: FC<SongItemProps> = (props) => {
  const { item } = props

  return (
    <SongItemWrapper>
      <div className="cover-top">
        <img src={item.picUrl} alt={item.name} />

        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {item.playCount}
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
