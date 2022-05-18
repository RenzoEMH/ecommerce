import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getOneProduct } from "../../api/product";

const initialState = {};

export const getAllProductsAsync = createAsyncThunk(
  "products/getAll",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

export const getOneProductsAsync = createAsyncThunk(
  "products/getOne",
  async (id) => {
    const response = await getOneProduct(id);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })
      .addCase(getOneProductsAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload;
      });
  },
});

export default productsSlice.reducer;
