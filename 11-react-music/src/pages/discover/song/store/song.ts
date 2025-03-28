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
      dispatch(changeLyricAction(lyric))
    })
  }
)
interface ISongState {
  currentSong: any
  lyric: ILyric[]
}
const initialState: ISongState = {
  currentSong: {},
  lyric: []
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyric = payload
    }
  }
})

export const { changeCurrentSongAction, changeLyricAction } = songSlice.actions

export default songSlice.reducer
