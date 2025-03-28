import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  PlayerBarControl,
  PlayerBarInfo,
  PlayerBarOperator,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { appShallowEqual, useAppSelector } from '@/store'
import { formatImageSize } from '@/utils/format'

interface PlayerBarProps {
  children?: ReactNode
}

const PlayerBar: FC<PlayerBarProps> = (props) => {
  const { currentSong } = useAppSelector(
    (state) => ({ currentSong: state.song.currentSong }),
    appShallowEqual
  )

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="player-bar-content wrap-v3">
        <PlayerBarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </PlayerBarControl>
        <PlayerBarInfo>
          <Link to="/song">
            <img
              className="image"
              src={formatImageSize(currentSong?.al?.picUrl, 34)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="name">{currentSong?.name}</span>
              <span className="artist">{currentSong?.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:45</span>
                <span className="divider">/</span>
                <span className="duration">04:22</span>
              </div>
            </div>
          </div>
        </PlayerBarInfo>
        <PlayerBarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist">1</button>
            <button className="btn audio-quality-hover"></button>
          </div>
        </PlayerBarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
