import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "https://upayments-studycase-api.herokuapp.com/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmFrb3pkZW1pcjc5MUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYnVyYWtvenpkZW1pciIsImlhdCI6MTY2NjIxMTczNCwiZXhwIjoxNjY2NjQzNzM0fQ.4xZgb0KyvC5Ykbst_PknGYsAZtobxT_ePBJ-QopMwtg";

const getRequest = async (endpoint: string) => {
  try {
    return await axios({
      method: "GET",
      url: `${API_URL}/${endpoint}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async (body: Product) => {
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
  getRequest,
  createProduct
}

export default ProductService;


