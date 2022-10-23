import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CategoriesState {
    value: number
}

const initialState: CategoriesState = {
    value: 0,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categories: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { categories } = categoriesSlice.actions

export const selectCategories = (state: { categories: { categories: any } }) => state.categories.categories;


export default categoriesSlice.reducer