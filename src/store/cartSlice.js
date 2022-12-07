/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  ordersItem: localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [],
  amount: 0


  ,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart(state, action) {
      console.log(action.payload, 'тут это')
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);


        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));



    },
    removeFromCart(state, action) {


      if (action.payload.cartQuantity > 1) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id == action.payload.id);
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left",
        });
      } else {


        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id);
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    onAddToOrder(state, action) {
      console.log(action.payload, 'яяя')
      axios({
        method: 'post',
        url: `http://localhost:3003/orders/`,
        data: {
          deliveryInfo: action.payload[0],
          orderInfo: action.payload[1],
          status: 'Принято',
          statusID: 1,
          orderTime: '15:48',
          orderDate: '05.12.2022'
        },

      })

      // state.cartItems = [];
      // localStorage.setItem("cartItems", JSON.stringify([]));

    },

  }

});

export const { addToCart, removeFromCart, onAddToOrder } = cartSlice.actions;

export default cartSlice.reducer;
