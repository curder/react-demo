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

export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const { banners } = await getBanners()
    dispatch(changeRecommendListAction(banners))
  }
)

export const fetchHotRecommendsAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const { result } = await getHotRecommends()

    dispatch(changeHotRecommendsAction(result))
  }
)

// 获取新碟上架数据
export const fetchNewAlbumsAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const { albums } = await getNewAlbums()
    dispatch(changeNewAlbumsAction(albums))
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
