import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProduct } from "../../services/ProductService";
import { Product } from "../../types/Product";

interface ProductState {
    products: Product[] | null;
}

const initialState: ProductState = {
    products: [],
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    }
})

export default productSlice.reducer;
export const { setProduct } = productSlice.actions;