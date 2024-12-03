import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext/index.jsx";

export default function ProtectedRoute({ children }) {
    const { userLoggedIn } = useAuth();

    if (!userLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}
