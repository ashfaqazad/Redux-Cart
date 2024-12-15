import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalPrice -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

// Reducer ko export karein
export default cartSlice.reducer;
