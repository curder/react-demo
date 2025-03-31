import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { DownloadWrapper } from './style'

interface DownloadProps {
  children?: ReactNode
}

const Download: FC<DownloadProps> = (props) => {
  const [isPcDownLoad, setIsPcDownLoad] = useState(false)

  return (
    <DownloadWrapper>
      <div className="content">
        <div className="main">
          <div className="main-pc">
            <div className="title">在电脑上听</div>
            <img
              className="img"
              src={require('@/assets/images/download/pc.png')}
              alt=""
            />
            <div className="type">
              <span className="info">
                <i className="icon mac"></i>
                <span className="text">macOS</span>
              </span>
              <span className="info">
                <i className="icon windows"></i>
                <span className="text">Windows</span>
              </span>
            </div>
            <div className="download-btn">
              <span className="text">下载电脑端</span>
            </div>
          </div>
          <div className="main-mobile">
            <div className="title">在手机上听</div>
            <img
              className="img"
              src={require('@/assets/images/download/mobile.png')}
              alt=""
            />
            <div className="type">
              <span className="info">
                <i className="icon iphone"></i>
                <span className="text">iPhone</span>
              </span>
              <span className="info">
                <i className="icon android"></i>
                <span className="text">Android</span>
              </span>
            </div>
            <div className="download-btn">
              <i className="icon"></i>
              <span className="text">下载手机端</span>
            </div>
          </div>
        </div>
      </div>
      <div className="group quku">
        <div className="group-container">
          <div className="content">
            <h3 className="title">千万曲库 首首CD音质</h3>
            <p className="text">囊括百万无损SQ音乐，你在用手机听歌时，</p>
            <p className="text">也能感受到纤毫毕现的CD音质，更能免费离线收听</p>
          </div>
          <div className="img">
            <img
              src={require('@/assets/images/download/quku.jpg')}
              alt="千万曲库  首首CD音质"
            />
          </div>
        </div>
      </div>
      <div className="group star">
        <div className="group-container">
          <div className="img">
            <img
              src={require('@/assets/images/download/star.jpg')}
              alt="千位明星  亲自推荐音乐"
            />
          </div>
          <div className="content">
            <h3 className="title">千位明星 亲自推荐音乐</h3>
            <p className="text">
              韩红，戴佩妮等
              <span className="attract">千位明星已入驻</span>
              ，亲自创建私房歌单，录制独
            </p>
            <p className="text">家DJ节目，推荐他们心中的好音乐</p>
          </div>
        </div>
      </div>
      <div className="group social-contact">
        <div className="group-container">
          <div className="content">
            <h3 className="title">社交关系 发现全新音乐</h3>
            <p className="text">
              你可以
              <span className="attract">关注明星</span>
              、DJ和好友，通过浏览他们的动态、收藏和
            </p>
            <p className="text">分享，发现更多全新好音乐</p>
          </div>
          <div className="img">
            <img
              src={require('@/assets/images/download/social-contact.jpg')}
              alt="社交关系  发现全新音乐"
            />
          </div>
        </div>
      </div>
      <div className="group real-time">
        <div className="group-container">
          <div className="img">
            <img
              src={require('@/assets/images/download/real-time.jpg')}
              alt="手机电脑  歌单实时同步"
            />
          </div>
          <div className="content">
            <h3 className="title">手机电脑 歌单实时同步</h3>
            <p className="text">
              只要一个帐号，你就可以同步在手机、电脑上创建、收藏
            </p>
            <p className="text">
              的歌单，
              <span className="attract">随时随地畅享好音乐</span>
            </p>
          </div>
        </div>
      </div>
      <div className="group distinguish">
        <div className="group-container">
          <div className="content">
            <h3 className="title">听歌识曲 助你疯狂猜歌</h3>
            <p className="text">
              歌曲很动听却不知道歌名，歌名在嘴边却想不起来……
            </p>
            <p className="text">
              用<span className="attract">听歌识曲</span>
              功能，几秒钟就知道歌名
            </p>
          </div>
          <div className="img">
            <img
              src={require('@/assets/images/download/recognizing-music.jpg')}
              alt="听歌识曲  助你疯狂猜歌"
            />
          </div>
        </div>
      </div>
    </DownloadWrapper>
  )
}

export default memo(Download)
