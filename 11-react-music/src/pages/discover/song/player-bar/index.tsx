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
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { formatImageSize, formatTime } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/song'
import { changeLyricIndexAction } from '../store/song'

interface PlayerBarProps {
  children?: ReactNode
}

const PlayerBar: FC<PlayerBarProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [isSliderChange, setIsSliderChange] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.song.currentSong,
      lyrics: state.song.lyrics,
      lyricIndex: state.song.lyricIndex
    }),
    appShallowEqual
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    // 播放歌曲
    audioRef.current!.src = getSongPlayUrl(currentSong?.id)
    // audioRef.current
    //   ?.play()
    //   .then(() => {
    //     setIsPlaying(true)
    //     // console.log('歌曲播放成功')
    //   })
    //   .catch((err) => {
    //     setIsPlaying(false)
    //     // console.log('歌曲播放失败', err)
    //   })
    // 设置音乐总时长
    setDuration(currentSong?.dt || 0)
  }, [currentSong])

  // 歌曲播放时间更新
  const timeUpdateHandle = () => {
    const audio = audioRef.current
    if (!audio) return
    const currentTime = audio.currentTime
    const percent = ((currentTime * 1000) / duration) * 100

    if (!isSliderChange) {
      setCurrentTime(currentTime * 1000)
      setProgress(percent)
    }
    // 匹配歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      if (currentTime * 1000 < lyrics[i].time) {
        // 匹配到歌词
        index = i - 1
        break
      }
    }

    if (lyricIndex === index || index === -1) return

    dispatch(changeLyricIndexAction(index))
  }

  // 播放按钮点击事件
  const playBtnClickHandle = () => {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  const sliderChangeHandle = (value: number) => {
    setProgress(value)
    setIsSliderChange(true) // 拖拽状态

    // 获取位置时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  // 进度条点击事件
  const sliderChangedHandle = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    // 获取点击位置时间
    const currentTime = (value / 100) * duration
    // 设置播放时间
    audio.currentTime = currentTime / 1000

    // 设置播放状态
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliderChange(false)
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
          {currentSong?.al ? (
            <Link to="/song">
              <img
                className="image"
                src={formatImageSize(currentSong?.al?.picUrl, 34)}
                alt=""
              />
            </Link>
          ) : (
            <div className="head">
              <img
                className="image"
                src={require('@/assets/images/default_album.jpg')}
              />
              <a href="#" className="musk sprite_playbar"></a>
            </div>
          )}
          <div className="info">
            <div className="song">
              <span className="name">{currentSong?.name}</span>
              <span className="artist">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.5}
                tooltip={{ formatter: null }}
                onChange={sliderChangeHandle}
                onChangeComplete={sliderChangedHandle}
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
