import React, { useEffect } from "react";
import LoginForm from "../Features/login/LoginForm";

function Login() {
  useEffect(() => {
    document.title = "StockShop | Login";
  }, []);

  return <LoginForm />;
}

export default Login;
