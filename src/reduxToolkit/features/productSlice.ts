import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../../services/ProductService";
import { Product } from "../../types/Product";

interface ProductState {
    products: Array<Product> | null
}

const initialState: ProductState = {
    products: [],
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Array<Product>>) => {
            state.products = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
            state.products = action.payload;
        });
    }
})

export default productSlice.reducer;
export const { setProduct } = productSlice.actions;