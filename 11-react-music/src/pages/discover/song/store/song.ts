import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../services/song'
import { ILyric, parseLyric } from '@/utils/song'

export const fetchCurrentSongAction = createAsyncThunk(
  'fetch/currentSongData',
  (id: number, { dispatch }) => {
    // 获取当前歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      dispatch(changeCurrentSongAction(song))
    })

    // 获取当前歌曲歌词
    getSongLyric(id).then((res) => {
      const lyric = parseLyric(res.lrc.lyric)
      dispatch(changeLyricsAction(lyric))
    })
  }
)
interface ISongState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
}
const initialState: ISongState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1
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
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = songSlice.actions

export default songSlice.reducer
