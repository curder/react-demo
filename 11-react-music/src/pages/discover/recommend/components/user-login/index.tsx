import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWrapper } from './style'
import { Link } from 'react-router-dom'

interface UserLoginProps {
  children?: ReactNode
}

const UserLogin: FC<UserLoginProps> = (props) => {
  return (
    <UserLoginWrapper>
      <div className="vip-card"></div>
      <div className="info sprite_02">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <Link to="/login" className="sprite_02">
          用户登录
        </Link>
      </div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
