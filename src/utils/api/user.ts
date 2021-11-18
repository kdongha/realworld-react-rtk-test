import axios, { AxiosResponse } from 'axios';
import { SERVER_BASE_URL } from 'utils/constant';
import { User } from '../../types';

export interface registerRequest {
    username: string;
    email: string;
    password: string;
}

export interface registerResponse {
    user: User;
}

export const register = (user: registerRequest): Promise<AxiosResponse<registerResponse>> =>
    axios.post(`${SERVER_BASE_URL}/users`, {
        user,
    });

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    user: User;
}

export const login = (user: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> =>
    axios.post(`${SERVER_BASE_URL}/users/login`, {
        user,
    });

export interface ICurrentResponse {
    user: User;
}

export const current = (): Promise<AxiosResponse<ICurrentResponse>> => {
    const token = window.localStorage.getItem('user');
    return axios.get(`${SERVER_BASE_URL}/user`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
};
