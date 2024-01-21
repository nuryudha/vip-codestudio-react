import { createContext, useContext, useReducer } from 'react';

const TotalPriceContext = createContext(null);

const TotalPriceDIspatchContext = createContext(null);

function totalPriceReducer(state, action) {
  switch (action.type) {
    case 'UPDATE': {
      return {
        total: action.payload,
      };
    }
    default: {
      throw Error('Unknown Action : ' + action.type);
    }
  }
}
export function TotalPriceProvider({ children }) {
  const [totalPrice, dipatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDIspatchContext.Provider value={dipatch}>{children}</TotalPriceDIspatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDIspatchContext);
}
