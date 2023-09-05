import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
   addTask: (state,action)=>{ 
    state.push(  { value:action.payload , key: true 
   }) 
   },
   deleteTask:(state,action)=>{
return state.filter((item,index)=> index !==action.payload)
   },
   editInput:(state, action)=>{
state[action.payload].key=false
   },
   editTask:(state,action)=>{
   state[action.payload.id].value= action.payload.todo 
   state[action.payload.id].key=true
   }
    }
})

export const {addTask, deleteTask, editTask, editInput}=todoSlice.actions

export default todoSlice.reducer;
