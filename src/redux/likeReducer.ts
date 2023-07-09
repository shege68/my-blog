import { createSlice } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { createCompilerHost } from "typescript";

type LikeState = {
    [id: number]: boolean
}

const initialState:  LikeState = {}

// export const likeReducer = (state = initialState, action: AnyAction) => {
//     switch (action.type){
//         case 'TOGGLE_LIKE': {
//             return {
//                 ...state,
//                 [action.id]: !state[action.id]
//             }
//         }
//         default:
//             return state
//     }
// }

export const likeSlice = createSlice({
    name: 'like',
    initialState: initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload]
        })
    }
})

export const {toggleLike} = likeSlice.actions
export default likeSlice.reducer