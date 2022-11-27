import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'src/store/reducers/userReducer';

export const reducer = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export type RootState = ReturnType<typeof reducer.getState>;