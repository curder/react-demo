import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RightSectionHeaderWrapper } from './style'
import { Link } from 'react-router-dom'

interface RightSectionHeaderProps {
  children?: ReactNode
  title: string
  morePath?: string
}

const RightSectionHeader: FC<RightSectionHeaderProps> = (props) => {
  const { title, morePath } = props
  return (
    <RightSectionHeaderWrapper>
      <h3>{title}</h3>
      {morePath && <Link to={morePath}>查看更多 &gt;</Link>}
    </RightSectionHeaderWrapper>
  )
}

export default memo(RightSectionHeader)
