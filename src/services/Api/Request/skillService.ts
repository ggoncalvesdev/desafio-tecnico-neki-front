import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface listaSkills {
    id: number;
    name: string;
    version: string;
    description: string;
    imageUrl: string;
}

const getAll = (data): Promise<AxiosResponse<listaSkills[], any>> => {
    return Api.get(`/skills`);
};

const get = (idSkill: number) => {
    return Api.get(`/skills${idSkill}`);
};

const create = (data): Promise<AxiosResponse<listaSkills[], any>> => {
    return Api.post(`/skills`, data);
};

const update = (idSkill: number, data) => {
    return Api.put(`/skills${idSkill}`, data);
};

const remove = (idSkill: number) => {
    return Api.delete(`/skills${idSkill}`);
};
const skillService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default skillService;
