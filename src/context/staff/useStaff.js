import { useContext } from "react"
import { StaffContext } from "./staffContext"

export const useStaff = () =>{
    return useContext(StaffContext)
}