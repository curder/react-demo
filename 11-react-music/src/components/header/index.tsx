import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  children?: ReactNode
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/friend">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
    </>
  )
}

export default memo(Header)
