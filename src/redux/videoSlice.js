import {createSlice} from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name : "videos",
    initialState : {
        videoData : null,
    },

    reducers :{
        addVideoData : (state , action) =>{
            state.videoData = action.payload;
        },
    }

});

export const {addVideoData} = videoSlice.actions;
export default videoSlice.reducer;
