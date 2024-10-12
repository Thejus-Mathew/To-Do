import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoSlice'
import searchSlice from './searchSlice'


export const todoStore = configureStore({
    reducer:{
        todoSlice,
        searchSlice
    }
})