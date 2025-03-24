import { memo, useRef } from 'react'
import { Carousel } from 'antd'
import type { FC, ReactNode, SyntheticEvent } from 'react'
import { appShallowEqual, useAppSelector } from '@/store'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { CarouselRef } from 'antd/es/carousel'

interface BannersProps {
  children?: ReactNode
}

const Banners: FC<BannersProps> = (props) => {
  const bannerRef = useRef<CarouselRef>(null)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  const handlePrevClick = (e: SyntheticEvent) => {
    bannerRef.current?.prev()
  }

  const handleNextClick = (e: SyntheticEvent) => {
    bannerRef.current?.next()
  }

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={3000} ref={bannerRef}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => handlePrevClick(e)}
          ></button>
          <button
            className="btn right"
            onClick={(e) => handleNextClick(e)}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banners)
