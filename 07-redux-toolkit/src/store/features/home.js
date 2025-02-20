import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultiDataAction = createAsyncThunk('fetch/homeMultiData', async (payload, { dispatch, getState }) => {
    return await axios.get('http://123.207.32.32:8000/home/multidata')
        .then(({ data }) => ({ banner: data.data.banner.list, recommend: data.data.recommend.list }));
});

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        banners: [],
        recommends: [],
    },
    reducers: {
        // changeBanners: (state, { payload }) => {
        //     return { ...state, banners: payload, }
        // },
        // changeRecommends: (state, { payload }) => {
        //     return { ...state, recommends: payload, }
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomeMultiDataAction.fulfilled, (state, { payload }) => {
            return { ...state, banners: payload.banner, recommends: payload.recommend, };
        });
    }
});

// export const { changeBanners, changeRecommends, } = homeSlice.actions; // 导出action
export default homeSlice.reducer;