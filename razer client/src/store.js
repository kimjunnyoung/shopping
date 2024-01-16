import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 1, name: "headset", count: 1, price: 10000 },
    { id: 3, name: "mouse", count: 1, price: 5000 },
    { id: 2, name: "keyboard", count: 1, price: 20000 },
    { id: 4, name: "monitor", count: 1, price: 70000 },
  ],
  reducers: {
    cartDel(state, action){
      let index = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(index, 1);
    }
  }
});

export let {cartDel} = cart.actions

export default configureStore({
  reducer: {
    cart: cart.reducer
  },
});
