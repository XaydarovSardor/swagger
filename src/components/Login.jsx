import React, { useState } from 'react'
import { login } from '../api/auth';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await login({ username, password });
            const token = res.payload.accessToken;

            localStorage.setItem("token", token);
            alert("Login success");
        } catch (err) {
            setError("Username yoki password noto'g'ri");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur rounded-2xl shadow-xl p-8 border border-slate-700">
                <h1 className="text-2xl font-semibold text-white text-center mb-2">
                    Welcome back
                </h1>
                <p className="text-slate-400 text-center mb-6">
                    Login to your account
                </p>

                {error && (
                    <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500 text-red-400 px-4 py-2 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Username
                        </label>
                        <input
                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full rounded-xl bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition text-white py-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500">
                    © 2025 Repo App
                </div>
            </div>
        </div>
    );
    
}
