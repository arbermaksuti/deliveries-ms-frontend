import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './reducers/userReducer';

export const reducer = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export type RootState = ReturnType<typeof reducer.getState>;