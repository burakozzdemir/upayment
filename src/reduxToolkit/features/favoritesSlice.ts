import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface FavoriteState {
    favorites: Array<Product> | null
}

const initialState: FavoriteState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setInitialFavorites: (state, action: PayloadAction<Array<Product>>) => {
            state.favorites = action.payload;
        },
        addFavorite: (state, action: PayloadAction<Product>) => {
            if (!state.favorites?.find((x) => x._id === action.payload._id)) {
                state.favorites?.push(action.payload);
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
        },
        deleteFavorite: (state, action: PayloadAction<number>) => {
            state.favorites?.splice(action.payload, 1);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    }
})

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite, setInitialFavorites } = favoriteSlice.actions;