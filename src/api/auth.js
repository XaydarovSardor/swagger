import { api } from "./axios";

export const login = async (data) => {
    const res = await api.post("/authenticate", data);
    return res.data;
};
