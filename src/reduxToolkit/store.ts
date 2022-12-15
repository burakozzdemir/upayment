import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import categoriesReducer from './features/categoriesSlice'
import productReducer from './features/productSlice'
import favoriteReducer from './features/favoritesSlice'


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        product: productReducer,
        favorites: favoriteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;