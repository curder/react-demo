import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface ToplistProps {
  children?: ReactNode
}

const Toplist: FC<ToplistProps> = (props) => {
  return <>Toplist</>
}

export default memo(Toplist)
