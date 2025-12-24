import { api } from "../../api/api"

export const createNewStaff = (data) =>{
    return api.post("/admin/user/register/staff",data)
}