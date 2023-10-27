import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import videoSlice from './videoSlice';
import searchSlice from './searchSlice';
import searchVideoSlice from './searchVideoSlice';

const appStore = configureStore({
    reducer : {
        app : appSlice,
        videos : videoSlice,
        search: searchSlice,
        searchVideos : searchVideoSlice,
    },
});

export default appStore;