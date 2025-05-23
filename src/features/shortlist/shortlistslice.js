import { createSlice} from "@reduxjs/toolkit";


const initialState= false;

const Shortlist=createSlice({

    name:"Shortlist",
    initialState,
    reducers:{
toggleShortlist:(state)=>{return !state}

    }
})
export const { toggleShortlist } = Shortlist.actions;
export default Shortlist.reducer;