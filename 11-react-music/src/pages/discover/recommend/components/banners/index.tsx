import clsx from 'clsx'
import { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppSelector } from '@/store'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { CarouselRef } from 'antd/es/carousel'
import { Link } from 'react-router-dom'

interface BannersProps {
  children?: ReactNode
}

const Banners: FC<BannersProps> = (props) => {
  const bannerRef = useRef<CarouselRef>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }

  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }

  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  // 获取动态的背景图片
  let bgImage = banners[currentIndex]?.imageUrl
  if (bgImage) {
    bgImage = bgImage + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{
        background: `url(${bgImage}) no-repeat center/6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            effect="fade"
            ref={bannerRef}
            autoplaySpeed={3000}
            afterChange={(current) => handleAfterChange(current)}
          >
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

          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li
                  key={item.imageUrl}
                  onClick={() => bannerRef.current?.goTo(index)}
                >
                  <span
                    className={clsx('item', currentIndex === index && 'active')}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <Link className="btn" to="/download">
            下载客户端
          </Link>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => handlePrevClick()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => handleNextClick()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banners)
