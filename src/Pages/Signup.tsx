import React, { useEffect } from "react";
import Register from "../Features/register/Register";

function Signup() {
  useEffect(() => {
    document.title = "StockShop | Register";
  }, []);

  return <Register />;
}

export default Signup;
