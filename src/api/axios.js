import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8900/repo",
    headers: {
        "Content-Type": "application/json",
    },
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});