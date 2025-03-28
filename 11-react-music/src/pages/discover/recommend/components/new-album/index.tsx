import { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import SectionHeader from '../section-header'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { appShallowEqual, useAppSelector } from '@/store'
import AlbumItem from '@/components/album-item'

interface NewAlbumProps {
  children?: ReactNode
}

const NewAlbum: FC<NewAlbumProps> = (props) => {
  const albums = useAppSelector(
    (state) => state.recommend.newAlbums,
    appShallowEqual
  )

  const bannerRef = useRef<CarouselRef>(null)

  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <SectionHeader title="新碟上架" moreLink="/discover/album" />

      <div className="album-content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>

        <div className="albums">
          <Carousel dots={false} speed={1000} ref={bannerRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="album-items">
                  {albums.slice(item * 5, (item + 1) * 5).map((album) => {
                    return <AlbumItem key={album.id} album={album} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>

        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
