import { appShallowEqual, useAppSelector } from '@/store'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface BannersProps {
  children?: ReactNode
}

const Banners: FC<BannersProps> = (props) => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  return (
    <>
      {banners.map((item) => {
        return (
          <div key={item.imageUrl} className="banner-item">
            {item.imageUrl}
          </div>
        )
      })}
    </>
  )
}

export default memo(Banners)
