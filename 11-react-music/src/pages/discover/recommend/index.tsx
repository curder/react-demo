import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface DiscoverProps {
  children?: ReactNode
}

const Discover: FC<DiscoverProps> = (props) => {
  return <>Discover</>
}

export default memo(Discover)
