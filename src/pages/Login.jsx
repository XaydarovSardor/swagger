import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getMe, login } from "../api"
import { ROLES, ROUTES } from "../config/constants"

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            const res = await login({ username, password })
            localStorage.setItem("accessToken", res.data.payload.accessToken)
            localStorage.setItem("refreshToken", res.data.payload.refreshToken)
            const userRes = await getMe()
            console.log(userRes);
            const role = userRes.data.role
            switch (role) {
                case `${ROLES.ADMIN}`:
                    navigate(`${ROUTES.ADMIN}`)
                    break
                case `${ROLES.STAFF}`:
                    navigate(`${ROUTES.STAFF}`)
                    break
                case `${ROLES.AUTHOR}`:
                    navigate(`${ROUTES.AUTHOR}`)
                    break
                default:
                    navigate("/")
            }

        } catch (err) {
            setError("Username yoki password noto'g'ri")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Login</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}
