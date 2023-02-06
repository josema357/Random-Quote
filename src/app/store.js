import { configureStore } from "@reduxjs/toolkit";
import  quoteSlice  from "../reducers/quoteSlice";

export default configureStore({
    reducer:{
        quote: quoteSlice
    }
})