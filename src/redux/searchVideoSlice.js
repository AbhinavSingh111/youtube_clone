import { createSlice } from "@reduxjs/toolkit";

const searchVideoSlice = createSlice({
    name : "searchVideos",
    initialState : {
        searchVideoData : null,
    },
    reducers : {
        addSearchData : (state, action) => {
            state.searchVideoData = action.payload;
        }
    }
});

export const {addSearchData} = searchVideoSlice.actions;
export default searchVideoSlice.reducer;