import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider/useAuth";

/**
 * Component that defines private routes based on user authentication.
 * If the user is authenticated (has a token), it allows access to the nested routes (Outlet),
 * otherwise, it redirects to the login page.
 */
export function PrivateRoutes() {
    const auth = useAuth();
    console.log('auth.token: ', auth.token);

    return auth.token ? <Outlet /> : <Navigate to='/login' />;
}
