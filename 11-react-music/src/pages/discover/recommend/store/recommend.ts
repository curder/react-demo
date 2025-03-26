import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommends,
  getNewAlbums,
  getToplist,
  getArtistList
} from '../services/recommend'
import { SongItem } from '@/components/song-item'
import { AlbumItem } from '@/components/album-item'
import { ToplistItem } from '@/pages/discover/recommend/components/toplist/item'
import { Artist } from '@/pages/discover/recommend/components/settle-artist'

interface IBanner {
  imageUrl: string
  typeTitle: string
}

interface IRecommendState {
  banners: IBanner[]
  hotRecommends: SongItem[]
  newAlbums: AlbumItem[]
  upToplist: ToplistItem
  newToplist: ToplistItem
  originToplist: ToplistItem
  artistList: Artist[]
}

export const fetchRecommendsAction = createAsyncThunk(
  'fetchRecommends',
  async (_, { dispatch }) => {
    // 获取轮播图
    getBanners().then((res) => {
      dispatch(changeRecommendListAction(res.banners))
    })
    // 获取热门推荐
    getHotRecommends().then((res) => {
      dispatch(changeHotRecommendsAction(res.result))
    })
    // 获取新碟上架
    getNewAlbums().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
    // 获取榜单数据
    // 1. 飙升榜
    getToplist(19723756).then((res) => {
      dispatch(changeUpToplistAction(res.playlist))
    })
    // 2. 新歌榜
    getToplist(3779629).then((res) => {
      dispatch(changeNewToplistAction(res.playlist))
    })
    // 3. 原创榜
    getToplist(2884035).then((res) => {
      dispatch(changeOriginToplistAction(res.playlist))
    })

    // 入驻歌手
    getArtistList().then(({ artists }) => {
      dispatch(changeArtistListAction(artists))
    })
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  upToplist: {} as ToplistItem,
  newToplist: {} as ToplistItem,
  originToplist: {} as ToplistItem,
  artistList: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeRecommendListAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeUpToplistAction(state, { payload }) {
      state.upToplist = payload
    },
    changeNewToplistAction(state, { payload }) {
      state.newToplist = payload
    },
    changeOriginToplistAction(state, { payload }) {
      state.originToplist = payload
    },
    changeArtistListAction(state, { payload }) {
      state.artistList = payload
    }
  }
})

export const {
  changeRecommendListAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeUpToplistAction,
  changeNewToplistAction,
  changeOriginToplistAction,
  changeArtistListAction
} = recommendSlice.actions
export default recommendSlice.reducer
