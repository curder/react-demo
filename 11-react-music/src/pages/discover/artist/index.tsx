import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface ArtistProps {
  children?: ReactNode
}

const Artist: FC<ArtistProps> = (props) => {
  return <>Artist</>
}

export default memo(Artist)
