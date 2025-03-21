import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface DownloadProps {
  children?: ReactNode
}

const Download: FC<DownloadProps> = (props) => {
  return <>Download</>
}

export default memo(Download)
