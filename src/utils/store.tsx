import { Store, configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';

const store: Store = configureStore({
    reducer: {
        blog: blogReducer,
    },
});

export default store