import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface FooterProps {
  children?: ReactNode
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  )
}

export default memo(Footer)
