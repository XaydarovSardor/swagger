import { useEffect, useState } from "react"
import { DepartmentContext } from "./DepartmentContext"
import { createNewDepartment, deleteDepartment, getDepartments } from "../../pages/admin/createNewDepartment"
import toast from "react-hot-toast"

export const DepartmentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [departments, setDepartments] = useState([])
  const [departmentErr, setDepartmentErr] = useState("")
  useEffect(() => {
    const getAllDepartments = async () => {
      try {
        setLoading(true)
        const response = await getDepartments()
        setDepartments(response.data.payload)
      } catch {
        setDepartmentErr("Department topilmadi")
      } finally {
        setLoading(false)
      }
    }
    getAllDepartments()
  }, [])
  const createDepartmentFunc = async (data) => {
    try {
      setLoading(true)
      setDepartmentErr("")
      const res = await createNewDepartment(data)
      console.log(res);
      const payload = res.data.payload
      setDepartments(prev => [...prev, payload])
      console.log(departments);
    } catch {
      setDepartmentErr("Department kiritishda xatolik")
      toast.error("Department yaratilmadi iltimos boshqatdan urinib ko'ring")
    } finally {
      setLoading(false)
      toast.success("Yangi department muvaffaqiyatli yaratilindi")
    }
  }
  const deleteDepartmentFunc = async (id) => {
    try {
      setLoading(true)
      setDepartmentErr("")
      await deleteDepartment(id)
      setDepartments(prev =>
        prev.filter(dep => dep.id !== id)
      )

    } catch {
      setDepartmentErr("Department o'chirishda xatolik")
      toast.error("Department o'chirilmadi iltimos boshqatdan urinib ko'ring")
    } finally {
      setLoading(false)
      toast.success("Department muvaffaqiyatli o'chirildi")
    }

  }
  return (
    <DepartmentContext.Provider value={
      {
        departments,
        departmentErr,
        loading,
        createDepartmentFunc,
        deleteDepartmentFunc,
      }
    }
    >
      {children}
    </DepartmentContext.Provider>
  )
}
