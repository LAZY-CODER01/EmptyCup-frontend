
import { createSlice } from "@reduxjs/toolkit";

const initialState=false


const sortorderslice=createSlice({
    name:"sortorder",
  initialState,
    reducers:{
sorttheorder:(state)=>{ return  !state}
    }
})

export const  {sorttheorder}=sortorderslice.actions;
export default sortorderslice.reducer
