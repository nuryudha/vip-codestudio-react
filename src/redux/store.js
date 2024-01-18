import cartReducer from "./slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log("oncreate store", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE:", store.getState());
});

export default store;
