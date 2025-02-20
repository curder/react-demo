import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",

    initialState: {
        count: 666,
    },

    reducers: {
        changeCount(state, actions) {
            return { ...state, count: state.count + actions.payload };
        },
    }
})

export const { changeCount } = counterSlice.actions;
export default counterSlice.reducer;