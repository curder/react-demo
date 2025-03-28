import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
`
export const FooterEnterWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 33px;

  li {
    width: 45px;
    margin-left: 80px;
    text-align: center;
    color: #666;

    &:first-child {
      margin-left: 0;
    }

    .logo {
      display: block;
      float: none;
      width: 45px;
      height: 45px;
      margin: 0 auto;
      background-size: 220px 220px;
    }

    // 音乐开放平台
    .logo-open-platform {
      background-position: -170px -5px;
      &:hover {
        background-position: -5px -115px;
      }
    }
    // 云村交易所
    .logo-trade {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }

    // X StudioAI歌手
    .logo-xstudio {
      background-size: 45px;
      background-image: url(${require('@/assets/images/xStudio.png')});
      background-position: 0 0;

      &:hover {
        background-image: url(${require('@/assets/images/xStudioHover.png')});
      }
    }

    // 用户认证
    .logo-auth {
      background-position: -60px -60px;
      &:hover {
        background-position: -115px -5px;
      }
    }

    // AI 免费写歌
    .logo-musician {
      background-size: 45px;
      background-image: url(${require('@/assets/images/aiLogo.png')});
      background-position: 0 0;

      &:hover {
        background-image: url(${require('@/assets/images/aiLogoHover.png')});
      }
    }

    // 云推歌
    .logo-cloudsong {
      background-size: 45px;
      background-image: url(${require('@/assets/images/cloudSong.png')});
      background-position: 0 0;

      &:hover {
        background-image: url(${require('@/assets/images/cloudSongHover.png')});
      }
    }

    // 赞赏
    .logo-reward {
      background-position: -170px -115px;
      &:hover {
        background-position: -60px -115px;
      }
    }

    span {
      display: inline-block;
      width: 100px;
      margin-top: 10px;
      margin-left: -27.5px;
      font-weight: 400;
      font-size: 12px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

export const FooterCopyrightWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .links {
    display: flex;
    line-height: 24px;
    text-align: center;

    li {
      display: flex;

      a {
        color: #666;
      }

      .line {
        margin: 0 8px 0 8px;
        color: #d9d9d9;
      }

      &:last-child {
        .line {
          display: none;
        }
      }
    }
  }
`
