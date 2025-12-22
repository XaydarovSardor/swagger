import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth/useAuth"
import { ROLES, ROUTES } from "../config/constants"

export const Header = () => {
    const { isLoggedIn, logoutFunc, user } = useAuth()
    const navigate = useNavigate()
    const handleProfileClick = () => {
        console.log(user);
        if (!user) {
            return
        }
        const userRole = user.userRole
        switch (userRole) {
            case ROLES.ADMIN:
                navigate(ROUTES.ADMIN)
                break;
            case ROLES.AUTHOR:
                navigate(ROUTES.AUTHOR)
                break;
            case ROLES.STAFF:
                navigate(ROUTES.STAFF)
                break;
            default:
                navigate(ROUTES.HOME)
                break;
        }
    }
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to={"/"} className="text-2xl font-bold text-indigo-600">Logo</Link>
                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
                    <Link to="/authors" className="text-gray-600 hover:text-indigo-600">Authors</Link>
                    <Link to="/documents" className="text-gray-600 hover:text-indigo-600">Documents</Link>
                    {isLoggedIn ? <>
                        <button onClick={handleProfileClick} className="px-4 py-2 cursor-pointer rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition" to={"/profile"}>Profile</button>
                        <button onClick={logoutFunc} className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer transition" to={"/profile"}>Logout</button>
                    </> : <>
                        <Link
                            to="/login"
                            className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            Register
                        </Link>
                    </>}
                </nav>
            </div>
        </header>
    )
}
