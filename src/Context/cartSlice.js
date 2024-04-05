import { createSlice } from "@reduxjs/toolkit";
import all_product from "../Components/Assets/all_product";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: getDefaultCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems[itemId] += 1;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems[itemId] -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
