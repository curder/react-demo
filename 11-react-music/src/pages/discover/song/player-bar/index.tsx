import { memo, useEffect, useRef, useState } from 'react'
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
import { formatImageSize, formatTime } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/song'

interface PlayerBarProps {
  children?: ReactNode
}

const PlayerBar: FC<PlayerBarProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.song.currentSong
    }),
    appShallowEqual
  )

  useEffect(() => {
    // 播放歌曲
    audioRef.current!.src = getSongPlayUrl(currentSong?.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        // console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        // console.log('歌曲播放失败', err)
      })
    // 设置音乐总时长
    setDuration(currentSong?.dt || 0)
  }, [currentSong])

  // 歌曲播放时间更新
  const timeUpdateHandle = () => {
    const audio = audioRef.current
    if (!audio) return
    const currentTime = audio.currentTime
    const percent = ((currentTime * 1000) / duration) * 100

    setCurrentTime(currentTime * 1000)
    setProgress(percent)
  }

  // 播放按钮点击事件
  const playBtnClickHandle = () => {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="player-bar-content wrap-v3">
        <PlayerBarControl $isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={playBtnClickHandle}
          ></button>
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
              <Slider
                value={progress}
                step={0.5}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdateHandle} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
