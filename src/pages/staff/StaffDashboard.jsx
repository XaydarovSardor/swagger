import { useAuth } from "../../context/auth/useAuth"

export const StaffDashboard = () => {
  const {user} = useAuth()
  console.log(user);
  
  return (
    <div>StaffDashboard</div>
  )
}
