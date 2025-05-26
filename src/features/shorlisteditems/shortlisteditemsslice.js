import { createSlice } from "@reduxjs/toolkit";


export const shortlistedItemsSlice = createSlice({
  name: 'shortlistitem',
  initialState: {
    items: []
  },
  reducers: {
    toggleshortlistmain: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1 && action.payload.actions.shortlist) {
        state.items.push(action.payload);
      } else if (index !== -1) {
        state.items.splice(index, 1);
      }
    }
  }
});

export const { toggleshortlistmain} = shortlistedItemsSlice.actions;
export default shortlistedItemsSlice.reducer;