import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import titles from '@/assets/data/header/titles.json'

interface HeaderProps {
  children?: ReactNode
}

const Header: FC<HeaderProps> = (props) => {
  const showItem = (item: any) => {
    return item.type === 'path' ? (
      <Link to={item.link}>{item.title}</Link>
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
          <HeaderRight></HeaderRight>
        </div>
      </HeaderWrapper>
    </>
  )
}

export default memo(Header)
