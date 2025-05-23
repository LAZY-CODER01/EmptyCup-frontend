import { createSlice ,} from "@reduxjs/toolkit";


const initialState={
    
    items:[]
}


const ShortlistitemSlice =createSlice(
{
    name:"shortlisteditems",
initialState,
reducers:{





toggleshortlistmain :(state,action)=>{

    const product=action.payload;
const exist=state.items.find(item=>item.id==product.id)
if(exist){
    state.items=state.items.filter(item=>item.id!==product.id)
}
else{
    state.items.push(product)
}

}



}

}

)

export const { toggleshortlistmain} = ShortlistitemSlice.actions;
export default ShortlistitemSlice.reducer;