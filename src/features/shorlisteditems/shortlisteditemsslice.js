import { createSlice } from "@reduxjs/toolkit";


const initialState={
    
    items:[]
}


const ShortlistitemSlice =createSlice(
{
    name:"shortlistitem",
initialState,
reducers:{





toggleshortlistmain :(state,action)=>{

    const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1 && action.payload.actions.shortlist) {
        state.items.push(action.payload);
      } else if (index !== -1 && !action.payload.actions.shortlist) {
        state.items.splice(index, 1);
      }
}

}

}

)

export const { toggleshortlistmain} = ShortlistitemSlice.actions;
export default ShortlistitemSlice.reducer;