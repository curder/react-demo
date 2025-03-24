import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../services/recommend'

interface IBanner {
  imageUrl: string
  typeTitle: string
}
interface IRecommendState {
  banners: IBanner[]
}

export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeRecommendListAction(result.banners))
  }
)

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeRecommendListAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeRecommendListAction } = recommendSlice.actions
export default recommendSlice.reducer
