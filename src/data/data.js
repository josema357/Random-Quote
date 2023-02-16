import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Action
export const fetchData=createAsyncThunk('fetchData',async()=>{
    const response= await axios.get(import.meta.env.VITE_REACT_QUOTE_DATA_URL,{
        method: 'GET',
        headers: { 'X-Api-Key': import.meta.env.VITE_REACT_API_KEY},
        contentType: 'application/json',
        
    });
    return JSON.stringify(response);
})