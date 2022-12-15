import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewProduct, Product } from "../types/Product";
import axios from "axios";
import { Category } from "../types/Category";

const API_URL = "https://upayments-studycase-api.herokuapp.com/api";

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmFrb3pkZW1pcjc1MEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYnVyYWtvenpkZW1pciIsImlhdCI6MTY3MDc3NjgxNywiZXhwIjoxNjcxMjA4ODE3fQ.RfTIw6KeUImu9CHvmKfrna4wx5S8cT_TOUbI1EDZD6o"

export const getProducts = createAsyncThunk<Array<Product>>(
  "api/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProduct = (id:string)=>{
  try {
    return  axios.get(`${API_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  } catch (error) {
  }
}


export const getCategories = createAsyncThunk<Array<Category>>(
  "api/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProduct = async (body: NewProduct) => {
  try {
    return await axios({
      method: "POST",
      url: `${API_URL}/products`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: body
    });
  } catch (err) {
    console.log(err);
  }
};

const ProductService = {
  getProducts,
  getProduct,
  getCategories,
  createProduct
}

export default ProductService;


