import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface PlaylistProps {
  children?: ReactNode
}

const Playlist: FC<PlaylistProps> = (props) => {
  return <>Playlist</>
}

export default memo(Playlist)
