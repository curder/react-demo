import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../services/song'
import { ILyric, parseLyric } from '@/utils/song'
import { AppDispatch, RootState } from '@/store'

// 获取当前歌曲
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { dispath: AppDispatch; state: RootState }
>('fetch/currentSongData', (id, { dispatch, getState }) => {
  // 从播放列表中尝试获取当前歌曲
  const playlist = getState().song.playlist
  const findIndex = playlist.findIndex((item) => item.id === id)

  if (findIndex === -1) {
    // 获取当前歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      dispatch(changeCurrentSongAction(song))
      // 保存到播放列表
      dispatch(changePlaylistAction([...playlist, song]))
      dispatch(changePlaylistIndexAction(playlist.length))
    })
  } else {
    // 从播放列表中获取当前歌曲
    const currentSong = playlist[findIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changePlaylistIndexAction(findIndex))
  }

  // 获取当前歌曲歌词
  fetchSongLyricAction(id)(dispatch, getState, undefined)
})

// 获取歌曲歌词
export const fetchSongLyricAction = createAsyncThunk<
  void,
  number,
  { dispath: AppDispatch; state: RootState }
>('fetch/currentSongLyric', (id, { dispatch, getState }) => {
  getSongLyric(id).then((res) => {
    const lyric = parseLyric(res.lrc.lyric)
    dispatch(changeLyricsAction(lyric))
  })
})

// 切换歌曲
export const changeSongAction = createAsyncThunk<
  void,
  boolean,
  { dispath: AppDispatch; state: RootState }
>('changeSong', (flag: boolean, { dispatch, getState }) => {
  const playMode = getState().song.playMode
  const playlist = getState().song.playlist
  const playlistIndex = getState().song.playlistIndex

  let newIndex = playlistIndex

  if (playMode === 1) {
    // 随机播放
    newIndex = Math.floor(Math.random() * playlist.length)
  } else {
    // 顺序播放和循环播放
    newIndex = flag ? playlistIndex + 1 : playlistIndex - 1
    if (newIndex >= playlist.length) newIndex = 0
    if (newIndex < 0) newIndex = playlist.length - 1
  }
  // 保存当前歌曲
  dispatch(changePlaylistIndexAction(newIndex))
  const song = playlist[newIndex]
  dispatch(changeCurrentSongAction(song))

  // 请求新的歌词
  fetchSongLyricAction(song.id)(dispatch, getState, undefined)
})

export type PlayMode = 0 | 1 | 2
interface ISongState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playlist: any[]
  playlistIndex: number
  playMode: PlayMode
}
const initialState: ISongState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playlist: [],
  playlistIndex: -1,
  playMode: 0 // 0: 顺序播放 1: 随机播放 2: 循环播放
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaylistAction(state, { payload }) {
      state.playlist = payload
    },
    changePlaylistIndexAction(state, { payload }) {
      state.playlistIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      console.log(payload)
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaylistAction,
  changePlaylistIndexAction,
  changePlayModeAction
} = songSlice.actions

export default songSlice.reducer
