import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import videoSlice from './videoSlice';
import searchSlice from './searchSlice';
import searchVideoSlice from './searchVideoSlice';
import chatSlice from './chatSlice';

const appStore = configureStore({
    reducer : {
        app : appSlice,
        videos : videoSlice,
        search: searchSlice,
        searchVideos : searchVideoSlice,
        chat : chatSlice,
    },
});

export default appStore;