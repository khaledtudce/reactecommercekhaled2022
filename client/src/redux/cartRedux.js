import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const itemId = action.payload._id;
      state.products = state.products.filter((item) => item._id !== itemId);
      state.quantity = state.quantity > 0 ? (state.quantity -= 1) : 0;
      state.total -= action.payload.price * action.payload.quantity;
    },
    adjustQuantities: (state, action) => {
      const cartItem = state.products.find(
        (item) => item._id === action.payload.item._id
      );
      if (action.payload.operation === "add") {
        cartItem.quantity = cartItem.quantity + 1;
        state.total += cartItem.price;
      } else if (action.payload.operation === "remove") {
        cartItem.quantity = cartItem.quantity > 0 ? cartItem.quantity - 1 : 0;
        state.total -= cartItem.price;
      }
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, adjustQuantities, reset } =
  cartSlice.actions;
export default cartSlice.reducer;
