import { api } from "./api"

export const login = (data) => {
    return api.post("/authenticate", data)
}

export const getMe = () => {
    return api.get("/user")
}
