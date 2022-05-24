import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error.response.status,
        message: error.message,
      });
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
