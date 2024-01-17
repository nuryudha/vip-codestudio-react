import cartReducer from './slices/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log('oncreate store', store.getState());

store.subscribe(() => {
  'Store Change : ', store.getState();
});

export default store;
