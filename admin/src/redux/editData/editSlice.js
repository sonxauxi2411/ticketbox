import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name: "edit", 
    initialState :{
        data : null
    },
    reducers: {
        setDataEdit : (state, action) =>{
            state.data = action.payload ;
        },
        resetDataEdit : (state) =>{
            state.data = null
        }
        
    }
})

export const {
    setDataEdit , resetDataEdit
  } = editSlice.actions;
  
export default editSlice.reducer;