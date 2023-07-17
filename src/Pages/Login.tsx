import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import LoginForm from "../Features/login/LoginForm";
import NavBarEmpty from "../Components/NavBarEmpty";
import NavBar from "../Components/NavBar";

function Login() {
  useEffect(() => {
    document.title = "StockShop | Login";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col min-h-screen">
      <NavBar />
      {/* <NavBarEmpty /> */}
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
