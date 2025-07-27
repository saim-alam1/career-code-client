import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    <Navigate to={"/signin"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
