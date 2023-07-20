import { createSlice } from "@reduxjs/toolkit";

type LikeState = {
    [id: number]: boolean
    //count: number
}

const initialState:  LikeState = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState: initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
            //likeId: [action.payload],
            //count: !state[action.payload] ? state.count + 1 : state.count - 1,
        })
    }
})

export const {toggleLike} = likeSlice.actions
export default likeSlice.reducer 