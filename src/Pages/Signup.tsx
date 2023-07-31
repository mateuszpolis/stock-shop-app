import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Register from "../Features/register/Register";

function Signup() {
  useEffect(() => {
    document.title = "StockShop | Register";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col min-h-screen">
      <NavBar />
      <Register />
      <Footer />
    </div>
  );
}

export default Signup;
