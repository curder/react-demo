import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface AlbumProps {
  children?: ReactNode
}

const Album: FC<AlbumProps> = (props) => {
  return <>Album</>
}

export default memo(Album)
