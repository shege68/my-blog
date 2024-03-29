import { createSlice } from "@reduxjs/toolkit";

type LikeState = {
    [id: number]: boolean
    count: number
}

const initialState:  LikeState = {count:0}

export const likeSlice = createSlice({
    name: 'like',
    initialState: initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
            count: !state[action.payload] ? state.count + 1 : state.count - 1,
        })
    }
})

export const {toggleLike} = likeSlice.actions
export default likeSlice.reducer 