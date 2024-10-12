import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name:"search",
    initialState:"",
    reducers:{
        updateSearch:(state,action)=>{
            return action.payload
        }
    }
})

export default searchSlice.reducer
export const {updateSearch} = searchSlice.actions