import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../services/song'

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
      console.log(res.lrc.lyric)
      // const lyric = parseLyric(res.lrc.lyric)
      // dispatch(changeLyricAction(lyric))
    })
  }
)
interface ISongState {
  currentSong: any
}
const initialState: ISongState = {
  currentSong: {}
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrentSongAction } = songSlice.actions

export default songSlice.reducer
