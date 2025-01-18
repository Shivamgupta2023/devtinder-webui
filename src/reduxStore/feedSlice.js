import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        showFeed: (state, action) => {
            return action.payload
        },
    }
})

export const {showFeed} = feedSlice.actions

export default feedSlice.reducer