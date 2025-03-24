import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface HotRecommendProps {
  children?: ReactNode
}

const HotRecommend: FC<HotRecommendProps> = (props) => {
  return <>HotRecommend</>
}

export default memo(HotRecommend)
