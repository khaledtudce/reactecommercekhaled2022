import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      const itemId = action.payload._id;
      state.products = state.products.filter((item) => item._id !== itemId);
    },
    reset: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, reset } = wishSlice.actions;
export default wishSlice.reducer;
