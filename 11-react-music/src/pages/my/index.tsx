import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface MyProps {
  children?: ReactNode
}

const My: FC<MyProps> = (props) => {
  return <>My</>
}

export default memo(My)
