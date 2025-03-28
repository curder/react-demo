import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface SongProps {
  children?: ReactNode
}

const Song: FC<SongProps> = (props) => {
  return <>Song</>
}

export default memo(Song)
