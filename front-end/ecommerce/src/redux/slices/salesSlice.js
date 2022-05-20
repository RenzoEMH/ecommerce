import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSale, getAllSales } from "../../api/sales";
import parseJwt from "../../utils/ParseJwt";
import { selectToken } from "./usersSlice";

export const getAllSalesAsync = createAsyncThunk("sales/getAll", async (id) => {
  const response = await getAllSales(id);
  return response.data;
});

export const createSaleAsync = createAsyncThunk(
  "sales/getEpaycoSale",
  async (id, { getState, rejectWithValue }) => {
    const token = selectToken(getState());
    const sesion = parseJwt(token);
    const saleData = {
      id,
      userId: sesion.id,
    };
    try {
      const { status, data } = await createSale(saleData);
      if (status !== 200) throw new Error(data.error);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    sales: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSaleAsync.pending, (state) => {
        state.isCreating = true;
        state.createdSale = null;
        state.saleError = null;
      })
      .addCase(createSaleAsync.fulfilled, (state, { payload }) => {
        state.isCreating = false;
        state.createdSale = payload;
      })
      .addCase(createSaleAsync.rejected, (state, { payload: message }) => {
        state.isCreating = false;
        state.saleError = message;
      })
      .addCase(getAllSalesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSalesAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.sales = payload;
      });
  },
});

// selector
export const selectIsCreating = (state) => state.sales.isCreating;
export const selectCreatedSale = (state) => state.sales.createdSale;
export const selectSaleError = (state) => state.sales.saleError;

export default salesSlice.reducer;
