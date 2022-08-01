import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    _id: string;
    name: string;
    email: string;
    role: string;
}

interface InitialState {
    loading: boolean;
    user?: IUser;
    errorMessage?: string;
}

const initialState: InitialState = {
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers : {
        getAllUsers: (state) => {
            state.loading = false;
            return state;
        }
    },
});

export const { getAllUsers } = userSlice.actions