import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface FooterProps {
  children?: ReactNode
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <>
      <h2>Footer</h2>
    </>
  )
}

export default memo(Footer)
