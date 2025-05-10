import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
