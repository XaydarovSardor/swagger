import { useState } from "react"
import { useAuth } from "../context/auth/useAuth"
import { ROLES, ROUTES } from "../config/constants"

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { loginFunc, loading, authError, user, isLoggedIn } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await loginFunc({ username, password })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Login</h2>
                {authError && <p className="text-red-500 mb-4 text-center">{authError}</p>}

                <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
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
