import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommends } from '../services/recommend'

interface IBanner {
  imageUrl: string
  typeTitle: string
}
interface IHotRecommends {
  id: number
  name: string
  picUrl: string
  playCount: number
}
interface IRecommendState {
  banners: IBanner[]
  hotRecommends: IHotRecommends[]
}

export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeRecommendListAction(result.banners))
  }
)

export const fetchHotRecommendsAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const restult = await getHotRecommends(8)
    dispatch(changeHotRecommendsAction(restult.result))
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
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
    }
  }
})

export const { changeRecommendListAction, changeHotRecommendsAction } =
  recommendSlice.actions
export default recommendSlice.reducer
