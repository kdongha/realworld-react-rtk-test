import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from 'types/index';
import { registerRequest, registerResponse, register } from 'utils/api/user';
import { AxiosError } from 'axios';

interface Errors {
    email?: string[];
    username?: string[];
    password?: string[];
    'email or password'?: string[];
    unknown?: boolean;
}

export interface UserState {
    user: null | User;
    status: 'idle' | 'loading' | 'failed';
    errors?: Errors;
}

const initialState: UserState = {
    user: null,
    status: 'idle',
    errors: {},
};

export const registerUser = createAsyncThunk<
    registerResponse,
    registerRequest,
    { rejectValue: { errors: Errors } }
>('user/register', async (user, { rejectWithValue }) => {
    try {
        const response = await register(user);
        window.localStorage.setItem('user', response.data.user.token);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userSlice.reducer;
