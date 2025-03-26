import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import SectionHeader from '../section-header'

interface NewAlbumProps {
  children?: ReactNode
}

const NewAlbum: FC<NewAlbumProps> = (props) => {
  return (
    <NewAlbumWrapper>
      <SectionHeader title="新碟上架" moreLink="/discover/album" />

      <div className="content">
        <button className="sprite_02 arrow arrow-left"></button>
        <button className="sprite_02 arrow arrow-right"></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
