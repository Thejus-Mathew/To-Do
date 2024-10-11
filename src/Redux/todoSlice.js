import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[
        {
            description:"Task 1",
            status:false,
            id:1,
            priority:'1',
            time:"10:12",
            date:"2024-12-19"
        },
        {
            description:"Task 2",
            status:true,
            id:2,
            priority:'2',
            time:"13:24",
            date:"2024-09-19"
        },
        {
            description:"Task 3",
            status:true,
            id:3,
            priority:'3',
            time:"18:44",
            date:"2024-10-19"
        },
        {
            description:"Task 4",
            status:false,
            id:4,
            priority:'1',
            time:"05:44",
            date:"2024-10-10"
        }
    ],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        editTodo:(state,action)=>{
            let index = state.findIndex(item=>item.id == action.payload.id)
            state[index]=action.payload
        },
        deleteTodo:(state,action)=>{
            let index = state.findIndex(item=>item.id == action.payload)
            state.splice(index,1)
        }
    }
})

export default todoSlice.reducer
export const {addTodo,editTodo,deleteTodo} = todoSlice.actions