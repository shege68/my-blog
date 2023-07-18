import { createSlice } from "@reduxjs/toolkit";

type LikeState = {
    [likeId: number]: boolean
    count: number
}
console.log()
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