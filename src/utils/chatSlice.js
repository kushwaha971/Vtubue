import { createSlice } from "@reduxjs/toolkit";
import { Live_Chat_Count } from "./contants";



const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },

    reducers:{
        addMessage:(state, action) => {

            state.messages.splice(Live_Chat_Count, 1)
            state.messages.push(action.payload);
        },
    },
});


export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;