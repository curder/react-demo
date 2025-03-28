import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../services/song'
import { ILyric, parseLyric } from '@/utils/song'
import { RootState } from '@/store'

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: RootState }
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
  getSongLyric(id).then((res) => {
    const lyric = parseLyric(res.lrc.lyric)
    dispatch(changeLyricsAction(lyric))
  })
})
interface ISongState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playlist: any[]
  playlistIndex: number
}
const initialState: ISongState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playlist: [
    {
      name: '天地龙鳞',
      mainTitle: null,
      additionalTitle: null,
      id: 1898179562,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5346,
          name: '王力宏',
          tns: [],
          alias: []
        }
      ],
      alia: ['大型纪录片《紫禁城》主题歌'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 1,
      v: 28,
      crbt: null,
      cf: '',
      al: {
        id: 136636985,
        name: '天地龙鳞',
        picUrl:
          'https://p1.music.126.net/cYieP3hj0lH2tq2J6PwEMw==/109951166659251663.jpg',
        tns: [],
        pic_str: '109951166659251663',
        pic: 109951166659251660
      },
      dt: 196680,
      h: {
        br: 320000,
        fid: 0,
        size: 7870125,
        vd: -63366,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4722093,
        vd: -60818,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3148077,
        vd: -59238,
        sr: 48000
      },
      sq: {
        br: 1014875,
        fid: 0,
        size: 24950723,
        vd: -63365,
        sr: 48000
      },
      hr: {
        br: 1773944,
        fid: 0,
        size: 43612440,
        vd: -63357,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 11,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14478274,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 22036,
      publishTime: 1637942400000
    },

    {
      name: '风中的羽翼',
      mainTitle: null,
      additionalTitle: null,
      id: 176434,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6071,
          name: '杨培安',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 75,
      st: 0,
      rt: '',
      fee: 1,
      v: 71,
      crbt: null,
      cf: '',
      al: {
        id: 17871,
        name: '午夜两点半的我',
        picUrl:
          'https://p1.music.126.net/eFkucc5ADDrFgO3qhXDEoA==/109951169273137120.jpg',
        tns: [],
        pic_str: '109951169273137120',
        pic: 109951169273137120
      },
      dt: 267733,
      h: {
        br: 320000,
        fid: 0,
        size: 10712338,
        vd: -56696,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6427420,
        vd: -54079,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4284961,
        vd: -52375,
        sr: 44100
      },
      sq: {
        br: 907609,
        fid: 0,
        size: 30374661,
        vd: -56692,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 10,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 54,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 22036,
      publishTime: 1148572800000
    }
  ],
  playlistIndex: -1
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
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaylistAction,
  changePlaylistIndexAction
} = songSlice.actions

export default songSlice.reducer
