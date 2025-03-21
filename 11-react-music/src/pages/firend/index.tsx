import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface FriendProps {
  children?: ReactNode
}

const Friend: FC<FriendProps> = (props) => {
  return <>Friend</>
}

export default memo(Friend)
