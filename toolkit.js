import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction('ADD_TO_CART');

// createReducer untuk membuat reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction('CREATE_SESSION');

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log('oncreate store', store.getState());

// Subscribe: untuk melihat perubahan yang ada di store
store.subscribe(() => {
  console.log('STORE CHANGE:', store.getState());
});

// Dispatch: untuk mengirimkan perubahan
store.dispatch(addToCart({ id: 1, quantity: 20 }));
store.dispatch(addToCart({ id: 2, quantity: 10 }));
store.dispatch(login());
