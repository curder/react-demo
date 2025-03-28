import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ToplistItemWrapper } from './style'
import { formatImageSize } from '@/utils/format'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/pages/discover/song/store/song'

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
  const dispatch = useAppDispatch()

  const { item } = props
  const { tracks = [] } = item
  const path = `/discover/toplist?id=${item.id}`

  // 播放歌曲
  const playSongHandle = (id: number) => {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <ToplistItemWrapper>
      <div className="toplist-item-header">
        <div className="image">
          <img src={formatImageSize(item.coverImgUrl, 80)} alt="" />
          <Link to={path} className="cover sprite_cover"></Link>
        </div>
        <div className="info">
          <Link to={path}>{item.name}</Link>
          <div>
            <button className="sprite_02 btn play">播放</button>
            <button className="sprite_02 btn favor">收藏</button>
          </div>
        </div>
      </div>
      <div className="toplist-items">
        {tracks.slice(0, 10).map((track, index) => {
          return (
            <div key={track.id} className="toplist-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <div className="name">
                  <a className="text-no-wrap" href={`/song?id=${track.id}`}>
                    {track.name}
                  </a>
                </div>
                <div className="operate">
                  <button
                    className="sprite_02 btn play"
                    title="播放"
                    onClick={() => playSongHandle(track.id)}
                  ></button>
                  <button
                    className="sprite_icon2 btn add-playlist"
                    title="添加到播放列表"
                  ></button>
                  <button className="sprite_02 btn favor" title="收藏"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="toplist-item-bottom">
        <Link to={path}>查看更多 &gt;</Link>
      </div>
    </ToplistItemWrapper>
  )
}

export default memo(ToplistItem)
