import React, { useEffect } from "react";
import Orders from "../../Features/admin/orders/Orders";

function Admin() {
  useEffect(() => {
    document.title = "StockShop | Admin";
  }, []);
  return (
    <div className="w-full">
      <h1 className="ml-2 mt-2 text-3xl  sm:text-2xl md:text-3xl lg:text-4xl font-black font-display">
        StockShop
      </h1>
      <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-screen-lg mx-auto my-8">
        <Orders />
      </div>
    </div>
  );
}

export default Admin;
