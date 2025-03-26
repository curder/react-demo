import { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import SectionHeader from '../section-header'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { useAppSelector } from '@/store'

interface NewAlbumProps {
  children?: ReactNode
}

const NewAlbum: FC<NewAlbumProps> = (props) => {
  const albums = useAppSelector((state) => state.recommend.newAlbums)

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

      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>

        <div className="banner">
          <Carousel dots={false} speed={1000} ref={bannerRef}>
            {[1, 2].map((item) => {
              return <h2 key="item">{item}</h2>
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
