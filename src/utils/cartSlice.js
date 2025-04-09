import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // Mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; //[]
      // RTK - either mutate the existing state or return a new state
      // return {items: []}; // this new object will be replaced inside original state
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
