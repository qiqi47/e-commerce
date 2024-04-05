import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch from react-redux
import { addToCart, removeFromCart } from "./cartSlice";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => {
          return product.id === Number(item);
        });

        if (itemInfo) {
          // Check if a product was found
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount; // Move this line outside the loop to return the total amount after all items are processed
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  // console.log(cartItems);
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart: (itemId) => dispatch(addToCart(itemId)),
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
