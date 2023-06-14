import axios from "axios";
const SERVER_API_URL = 'http://localhost:4000/api';//"https://tuiter-node-server-app-7k6l.onrender.com/api";
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });// turns on features of c


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}`, user);
    return response.data;
};

export const register = async ({firstName, lastName, username, password}) => {
    const response = await api.post(`${USERS_URL}/register`, {firstName, lastName, username, password});
    return response.data;
 }
