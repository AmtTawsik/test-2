import { configureStore, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";

const initialState = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.push(action.payload);
      console.log("state", action.payload);
    },
  },
});

export const { addToBuilder } = productSlice.actions;

export default configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, products: productSlice.reducer, },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});