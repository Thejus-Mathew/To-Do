import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoSlice'


export const todoStore = configureStore({
    reducer:{
        todoSlice
    }
})