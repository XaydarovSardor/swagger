import { useState } from "react"
import toast from "react-hot-toast"
import { StaffContext } from "./StaffContext"
import { createNewStaff } from "../../pages/admin/createstaffFunc"

export const StaffProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [staffErr, setStafferr] = useState("")
    const createStaffFunc = async (data) => {
        try {
            setLoading(true)
            setStafferr("")

            await createNewStaff(data)
        } catch {
            setStafferr("Staff kiritishda xatolik")
            toast.error("Staff yaratilmadi iltimos boshqatdan urinib ko'ring")
        } finally {
            setLoading(false)
            toast.success("Yangi staff muvaffaqiyatli yaratilindi")
        }
    }
    return (
        <StaffContext.Provider value={{
            loading,
            staffErr,
            createStaffFunc,
        }}>
            {children}
        </StaffContext.Provider>
    )
}
