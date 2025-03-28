import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MyWrapper } from './style'

interface MyProps {
  children?: ReactNode
}

const My: FC<MyProps> = (props) => {
  return (
    <MyWrapper className="my-music">
      <div className="my-login">
        <div className="login-content">
          <button className="login-btn"></button>
        </div>
      </div>
    </MyWrapper>
  )
}

export default memo(My)
