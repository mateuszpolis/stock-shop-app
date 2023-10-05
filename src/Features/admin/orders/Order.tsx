import React from "react";

function Order() {
  return (
    <div className="w-full rounded-md shadow-md p-2 transition-all">
      <h1 className="text-xl font-mono font-bold text-neutral-900 dark:text-neutral-50">
        Status: <span className="font-bold text-yellow-500">Pending</span>
      </h1>
      <div className="my-2">
        <div className="flex justify-between">
          <h2 className="text-md font-mono text-neutral-900 dark:text-neutral-50">
            OrderID <i className="fa-solid fa-id-card"></i>:{" "}
            <span className="font-bold">123456789</span>
          </h2>
          <h2 className="text-md font-mono text-neutral-900 dark:text-neutral-50">
            Date <i className="fa-regular fa-calendar"></i>:{" "}
            <span className="font-bold">12/12/2021</span>
          </h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-md font-mono text-neutral-900 dark:text-neutral-50">
            Products <i className="fa-solid fa-hashtag"></i>:{" "}
            <span className="font-bold">2</span>
          </h2>
          <h2 className="text-md font-mono text-neutral-900 dark:text-neutral-50">
            Total <i className="fa-solid fa-dollar-sign"></i>:{" "}
            <span className="font-bold">$100.00</span>
          </h2>
        </div>
        <h2 className="text-md font-mono text-neutral-900 dark:text-neutral-50">
          User <i className="fa-solid fa-user"></i>:{" "}
          <span className="font-bold">Mateusz P.</span>
        </h2>
      </div>
      <a
        href="/admin/orders/123456789"
        className="text-md font-mono text-neutral-900 dark:text-neutral-50 hover:underline transition-all"
      >
        View order details <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
}

export default Order;
