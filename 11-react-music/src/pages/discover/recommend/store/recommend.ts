import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommends,
  getNewAlbums
} from '../services/recommend'
import { SongItem } from '@/components/song-item'
import { AlbumItem } from '@/components/album-item'

interface IBanner {
  imageUrl: string
  typeTitle: string
}

interface IRecommendState {
  banners: IBanner[]
  hotRecommends: SongItem[]
  newAlbums: AlbumItem[]
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
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
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
    }
  }
})

export const {
  changeRecommendListAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction
} = recommendSlice.actions
export default recommendSlice.reducer
