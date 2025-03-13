import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface DownloadProps {
  children?: ReactNode
}

const Download: React.FC<DownloadProps> = (props) => {
  return <>Download</>
}

export default memo(Download)
