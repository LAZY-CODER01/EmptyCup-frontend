import { configureStore  } from "@reduxjs/toolkit";
import shortlistReducer from '../features/shortlist/shortlistslice'
import ShortlistitemSliceReducer from '../features/shorlisteditems/shortlisteditemsslice'
import sortorderReducer from '../features/sortorder/sortorderslice'
export const store=configureStore({

    reducer :{
        shortlist:shortlistReducer,
        shortlistitem:ShortlistitemSliceReducer,
        sortorder:sortorderReducer

    }

}) 