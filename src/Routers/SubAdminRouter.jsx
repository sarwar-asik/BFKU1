import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useSeller from "../Hooks/useShellar";

const SubAdminRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSubAdmin, isSubAdminLoading] = useSeller(user?.email);

  const location = useLocation();

  if (loading || isSubAdminLoading) {
    return <h1>Loading.........</h1>;
  }

  if (user && isSubAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SubAdminRouter;
