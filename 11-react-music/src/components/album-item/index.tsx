import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { formatImageSize } from '@/utils/format'

interface Artist {
  id: number
  name: string
}

export interface AlbumItem {
  id: number
  name: string
  picUrl: string
  artists: Artist | Artist[]
}

interface AlbumItemProps {
  children?: ReactNode
  album: AlbumItem
}

const AlbumItem: FC<AlbumItemProps> = (props) => {
  const { album } = props
  const artistNames =
    album.artists instanceof Array
      ? album.artists.map((item) => item.name).join(' / ')
      : album.artists.name
  return (
    <AlbumItemWrapper>
      <div className="album-cover">
        <img src={formatImageSize(album.picUrl, 100)} alt="" />
        <a href="#" className="cover sprite_cover"></a>
      </div>
      <div className="album-info">
        <div className="text-no-wrap album-name">{album.name}</div>
        <div className="text-no-wrap album-artist" title={artistNames}>
          {artistNames}
        </div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
