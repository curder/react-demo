import { createSlice } from '@reduxjs/toolkit'

interface ISongState {
  currentSong: any
}
const initialState: ISongState = {
  currentSong: {
    name: '舍得',
    mainTitle: null,
    additionalTitle: null,
    id: 453268268,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 12232132,
        name: '王唯旖',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 8,
    v: 36,
    crbt: null,
    cf: '',
    al: {
      id: 35124206,
      name: '哈NI，非WO陌属',
      picUrl:
        'https://p1.music.126.net/Y2caOTiYFLIK1uAaz1hr4w==/18746673255294451.jpg',
      tns: [],
      pic_str: '18746673255294451',
      pic: 18746673255294452
    },
    dt: 262068,
    h: {
      br: 320000,
      fid: 0,
      size: 10485595,
      vd: -55394,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6291374,
      vd: -52770,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4194264,
      vd: -51004,
      sr: 44100
    },
    sq: {
      br: 858134,
      fid: 0,
      size: 28111257,
      vd: -55393,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 11,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17179877376,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 19,
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
    cp: 0,
    publishTime: 1484236800007
  }
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeSongAction } = songSlice.actions

export default songSlice.reducer
