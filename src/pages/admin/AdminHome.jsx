import { useAuth } from "../../context/auth/useAuth"

export const AdminHome = () => {
    const {user} = useAuth()
    return (
        <>
            <h1>Name: {user.username}</h1>
            <h1>Role: {user.userRole}</h1>
        </>
    )
}
