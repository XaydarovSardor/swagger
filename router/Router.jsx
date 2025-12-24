import { Route, Routes } from "react-router-dom";
import { ROLES } from "../src/config/constants";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminDashboard } from "../src/pages/admin/AdminDashboard";
import { Login } from "../src/publicLayout/Login";
import { AuthorDashboard } from "../src/pages/author/AuthorDashboard";
import { Home } from "../src/pages";
import { RootLayout } from "../src/publicLayout/RootLayout";
import { AdminHome } from "../src/pages/admin/AdminHome";
import { CreateDepartment } from "../src/pages/admin/CreateDepartment";
import { StaffDashboard } from "../src/pages/staff/StaffDashboard";
import { CreateStaff } from "../src/pages/admin/CreateStaff";
import { RegisterAuthor } from "../src/publicLayout/RegisterAuthor";

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
                <Route
                    path="staff"
                    element={
                        <ProtectedRoute role={ROLES.STAFF}>
                            <StaffDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="register" element={<RegisterAuthor/>}/>
            </Route>
        </Routes>
    );
};
