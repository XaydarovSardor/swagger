import axios from "axios";
import { STORAGE_KEYS } from "../config/constants";
const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});