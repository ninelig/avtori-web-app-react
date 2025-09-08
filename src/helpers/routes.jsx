import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";


// Protected route (requires login)
export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Guest route (for non-logged-in users)
export const GuestRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
