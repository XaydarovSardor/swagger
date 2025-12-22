import { Route, Routes } from "react-router-dom";
import { ROLES } from "../src/config/constants";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminDashboard } from "../src/pages/admin/AdminDashboard";
import { Login } from "../src/publicLayout/Login";
import { AuthorDashboard } from "../src/pages/author/AuthorDashboard";
import { Home } from "../src/pages";
import { RootLayout } from "../src/publicLayout/RootLayout";
import { AdminHome } from "../src/pages/admin/AdminHome";
import { CreateStaff } from "../src/pages/admin/CreateStaff";
import { CreateDepartment } from "../src/pages/admin/CreateDepartment";

export const Router = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />

                <Route
                    path="admin"
                    element={
                        <ProtectedRoute role={ROLES.ADMIN}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<AdminHome />} />
                    <Route path="staff" element={<CreateStaff />} />
                    <Route path="departments" element={<CreateDepartment />} />
                </Route>

                <Route
                    path="author"
                    element={
                        <ProtectedRoute role={ROLES.AUTHOR}>
                            <AuthorDashboard />
                        </ProtectedRoute>
                    }
                />
            </Route>
        </Routes>
    );
};
