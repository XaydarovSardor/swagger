import { api } from "../../api/api"

export const createNewDepartment = (data) =>{
    return api.post("/admin/department",data)
}
export const getDepartments = () =>{
    return api.get("/public/department")
}
export const deleteDepartment = (id)=>{
    return api.delete(`/admin/department/${id}`)
}