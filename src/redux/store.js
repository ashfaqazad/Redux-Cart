// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });



import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../shoppingCart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

