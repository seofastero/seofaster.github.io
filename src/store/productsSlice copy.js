/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://635555bbda523ceadcff89cf.mockapi.io/product');
      return response?.data;
    } catch (error) {
      return rejectWithValue("an error occured");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productsFetch.pending, (state, action) => {
          state.status = "pending"
        },
        productsFetch.fulfilled, (state, action) => {
          state.status = "success";
          state.items = action.payload;
        },
        productsFetch.rejected, (state, action) => {
          state.status = "rejected";
          state.error = action.payload;
        },
      )


  },
});

export default productsSlice.reducer;
