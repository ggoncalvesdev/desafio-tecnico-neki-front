import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface login {
    login: string;
    password: string;
}

export interface createUser {
    login: string;
    password: string;
}

const sigin = (data): Promise<AxiosResponse<login, any>> => {
    return Api.post(`/auth/login`, data);
};

const create = (data): Promise<AxiosResponse<createUser, any>> => {
    return Api.post(`/auth/registro`, data);
};

const authService = {
    sigin,
    create,
};
export default authService;
