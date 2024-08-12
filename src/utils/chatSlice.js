  import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./Constant";
 const chatSlice= createSlice({
    name: "chat",
    initialState:{
        msg:[]
    },
    reducers:{
        addmsg:(state,action) =>{
            state.msg.splice(LIVE_CHAT_COUNT,1);
            state.msg.push(action.payload);
        }
    }
 })
 export const {addmsg} = chatSlice.actions;
 export default chatSlice.reducer;
