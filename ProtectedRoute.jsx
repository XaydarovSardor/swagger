import { useAuth } from "./src/context/auth/useAuth";

export const ProtectedRoute = ({ children, role }) => {
    const { isLoggedIn, user } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (role && user.userRole !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};
