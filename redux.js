// Reducer

import { legacy_createStore } from "redux";

function cartReducer(state = { cart: [{ id: 1, quantity: 20 }] }, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
}

// Store
const store = legacy_createStore(cartReducer);
console.log("oncreate store", store.getState());

// Subscribe : untuk meihat perubahan yang ada di store
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispatch : untuk mengirimkan perubahan
const action1 = { type: "ADD_TO_CART", payload: { id: 2, quantity: 20 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 10, quantity: 5 } };
store.dispatch(action2);
