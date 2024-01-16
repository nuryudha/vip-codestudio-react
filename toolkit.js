import { toolkit } from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state) => {
    state.push = [...state.cart, action.payload];
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Dispatch : untuk mengirimkan perubahan

store.dispatch(addToCart({ id: 1, quantity: 20 }));

// Subscribe : untuk meihat perubahan yang ada di store
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});
