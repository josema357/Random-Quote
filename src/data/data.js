import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Action
export const fetchData=createAsyncThunk('fetchData',async()=>{
    const response= await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
        method: 'GET',
        headers: { 'X-Api-Key': 'd4SNbRec1unteqNzzEJOIuc8sV0Zb0aKqn14U77J'},
        contentType: 'application/json',
        
    });
    return JSON.stringify(response);
})