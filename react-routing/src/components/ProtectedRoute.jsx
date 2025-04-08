import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const isAuth = localStorage.getItem("isAuth");
    return (isAuth ? children: <Navigate to="/" replace />);
}

export default ProtectedRoute;