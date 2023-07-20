import { createSlice } from "@reduxjs/toolkit"
import { Articles } from "utils/articlesArray"

type FavoritesState = {
    [liked: number]: number
}

const initialState: FavoritesState = {}

export const favoritesSlice = createSlice({name: 'favorites',
initialState: initialState,
reducers: {
    createFavorites: (state, action)=> ({
        ...state,

    })
}
})

export const {createFavorites} = favoritesSlice.actions
export default favoritesSlice.reducer 