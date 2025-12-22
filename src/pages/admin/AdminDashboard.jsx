import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth"
import { AdminSideBar } from "./AdminSideBar"

export const AdminDashboard = () => {
  const {user} = useAuth()
  console.log(user);
  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSideBar />
      <main className="flex-1 p-6">
        <Outlet/> 
      </main>
    </div>
  )
}
