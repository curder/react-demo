import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100,
    },
    reducers: {
        addAction: (state, { payload }) => {
            state.count += payload;
        },
        subAction: (state, { payload }) => {
            state.count -= payload;
        },
    }
})


export const { addAction, subAction } = counterSlice.actions;
export default counterSlice.reducer;