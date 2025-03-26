import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionHeaderWrapper } from './style'
import { Link } from 'react-router-dom'

interface Item {
  title: string
  path: string
}

interface SectionHeaderProps {
  title: string
  items?: Item[]
  moreLink: string
  children?: ReactNode
}

const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { title, items = [], moreLink } = props

  return (
    <SectionHeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>

        <ul className="items">
          {items.map((item, index) => {
            return (
              <li key={item.title} className="item">
                <Link to={item.path} className="link">
                  {item.title}
                </Link>
                <span className="divider">|</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          更多
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </SectionHeaderWrapper>
  )
}

export default memo(SectionHeader)
