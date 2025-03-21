import Request from '@/services'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface RecommendProps {
  children?: ReactNode
}

interface Banner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommend: FC<RecommendProps> = (props) => {
  const [banners, setBanners] = useState<Banner[]>([])

  useEffect(() => {
    // 数据请求
    Request.get({
      url: '/banner'
    }).then(({ banners }) => {
      setBanners(banners)
    })
  }, [])
  return (
    <>
      <h2>Recommend</h2>

      {banners.map((banner) => {
        return (
          <div key={banner.imageUrl}>
            <img src={banner.imageUrl} alt="" />
          </div>
        )
      })}
    </>
  )
}

export default memo(Recommend)
