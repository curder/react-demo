import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  FooterCopyrightWrapper,
  FooterEnterWrapper,
  FooterWrapper
} from './style'
import { footerLinks } from '@/assets/data/local-data'
interface FooterProps {
  children?: ReactNode
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <FooterWrapper>
      <div className="wrap-v2">
        <FooterEnterWrapper>
          <li>
            <a
              href="#"
              className="sprite_footer_enter logo logo-open-platform"
            ></a>
            <span>音乐开放平台</span>
          </li>
          <li>
            <a href="#" className="sprite_footer_enter logo logo-trade"></a>
            <span>云村交易所</span>
          </li>
          <li>
            <a href="#" className="sprite_footer_enter logo logo-xstudio"></a>
            <span>X StudioAI歌手</span>
          </li>
          <li>
            <a href="#" className="sprite_footer_enter logo logo-auth"></a>
            <span>用户认证</span>
          </li>
          <li>
            <a href="#" className="sprite_footer_enter logo logo-musician"></a>
            <span>AI 免费写歌</span>
          </li>
          <li>
            <a href="#" className="sprite_footer_enter logo logo-cloudsong"></a>
            <span>云推歌</span>
          </li>
          <li>
            <a href="#" className="sprite_footer_enter logo logo-reward"></a>
            <span>赞赏</span>
          </li>
        </FooterEnterWrapper>
        <FooterCopyrightWrapper className="copyright">
          <ul className="links">
            {footerLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.link}>{link.title}</a>
                  <span className="line">|</span>
                </li>
              )
            })}
          </ul>
        </FooterCopyrightWrapper>
      </div>
    </FooterWrapper>
  )
}

export default memo(Footer)
