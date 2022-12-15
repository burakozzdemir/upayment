import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCategories } from '../../services/ProductService'
import { Category } from '../../types/Category'

export interface CategoriesState {
    categories: Array<Category>
}

const initialState: CategoriesState = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Array<Category>>) => {
            state.categories = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<Array<Category>>) => {
            state.categories = action.payload;
        });
    }
})

export default categoriesSlice.reducer
export const { setCategories } = categoriesSlice.actions