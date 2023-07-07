import { AnyAction } from "redux";

type LikeState = {
    [id: number]: boolean
}

const initialState:  LikeState = {}

export const likeReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case 'TOGGLE_LIKE': {
            return {
                ...state,
                [action.id]: !state[action.id]
            }
        }
        default:
            return state
    }
}