// PrivateRoute.tsx
import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { selectLoggedIn } from "../Features/login/loginSlice";

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isLoggedin = useSelector(selectLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user != null);
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedin, navigate]);

  if (!isLoggedin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
