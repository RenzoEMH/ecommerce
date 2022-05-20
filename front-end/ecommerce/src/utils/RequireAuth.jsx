import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const token = useSelector((state) => state.usuarios.token);

  //if user type doesn't match, go to not found
  if (!token) return <Navigate to="/" replace />;

  return children;
};

export default RequireAuth;
