import { LoginData } from "../models/LoginData";
import { post } from "./BaseService";

export const login = (username: String, password: String) => {
    const data = `{ 
        "username": "${username}",
        "password": "${password}"
    }`;
    console.log(data)
    return post<LoginData>('/login', data);
};
