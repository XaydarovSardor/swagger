import { useEffect, useState } from "react";
import { getMe, login } from "../../api";
import { ROLES, ROUTES } from "../../config/constants";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [authError, setAuthError] = useState("")
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setAuthChecked(true)
    }, [])
    const loginFunc = async (data) => {
        try {
            setLoading(true)
            setAuthError("")
            await login(data)
            const userRes = await getMe()
            const userData = userRes.data.payload
            setUser(userData)
            toast.success("Tizimda muvaffaqiyatli ro'yxatdan o'tdingiz")
            localStorage.setItem("user", JSON.stringify(userData))
            const role = userData.userRole
            switch (role) {
                case ROLES.ADMIN:
                    navigate(ROUTES.ADMIN)
                    break
                case ROLES.STAFF:
                    navigate(ROUTES.STAFF)
                    break
                case ROLES.AUTHOR:
                    navigate(ROUTES.AUTHOR)
                    break
                default:
                    navigate("/")
            }
        } catch {
            setAuthError("Username yoki password noto'g'ri")
            toast.error("Tizimdan o'tmadingiz, iltimos yana urinib ko'ring")
        } finally {
            setLoading(false)
        }

    }
    const logoutFunc = () => {
        setUser(null)
        localStorage.removeItem("user")
        toast.success("Tizimda ro'yxatdan chiqdingiz")
        navigate(ROUTES.LOGIN)
    }

    return (
        <AuthContext.Provider value={{ loginFunc, authError, loading, isLoggedIn: !!user, logoutFunc,authChecked,user }}>
            {children}
        </AuthContext.Provider>
    );
};


