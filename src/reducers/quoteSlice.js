import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../data/data";

const initialState={
    isLoading: false,
    data: null,
    isError: false
}

export const quoteSlice=createSlice({
    name: 'quote',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=JSON.parse(action.payload).data[0];
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.isError=true;
            console.log('Error',action);
        })
    }
})

export default quoteSlice.reducer;