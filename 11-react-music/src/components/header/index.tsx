import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import titles from '@/assets/data/header/titles.json'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
interface HeaderProps {
  children?: ReactNode
}

interface ITitle {
  title: string
  link: string
  type: string
}

const Header: FC<HeaderProps> = (props) => {
  const showItem = (item: ITitle) => {
    return item.type === 'path' ? (
      <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    ) : (
      <a href={item.link} rel="noreferrer" target="_blank">
        {item.title}
      </a>
    )
  }

  return (
    <>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href="#" className="logo sprite_01">
              网易云音乐
            </a>
            <ul className="title-list">
              {titles.map((item, index) => (
                <li className="item" key={index}>
                  {showItem(item)}
                </li>
              ))}
            </ul>
          </HeaderLeft>
          <HeaderRight>
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
            <div className="center">创作者中心</div>
            <div className="login">登录</div>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </>
  )
}

export default memo(Header)
