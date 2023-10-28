import { createSlice } from "@reduxjs/toolkit";
import {MSG_BLOAT_LIMIT} from '../utilities/constants';


const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        addChats : (state , action) => {
            if(state.messages.length > MSG_BLOAT_LIMIT){state.messages.splice(0,1);}
             //splice will start removing 1 obj after after reaching the length of 30. for each new message , 1 message/obj will be removed
            // we are doing this to not let our page bloat , and keeping whats necessary only
            state.messages.push(action.payload); //ushift pushes from front of the list
        },
    },
});

export const {addChats} = chatSlice.actions;
export default chatSlice.reducer;