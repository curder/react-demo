import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FriendWrapper } from './style'

interface FriendProps {
  children?: ReactNode
}

const Friend: FC<FriendProps> = (props) => {
  return (
    <FriendWrapper>
      <div className="friend-login">
        <div className="login-content">
          <button className="login-btn"></button>
        </div>
      </div>
    </FriendWrapper>
  )
}

export default memo(Friend)
