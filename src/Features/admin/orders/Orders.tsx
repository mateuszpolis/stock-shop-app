import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Order from "./Order";

function Orders() {
  const [showInfo, setShowInfo] = React.useState(false);

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-mono font-bold text-neutral-900 dark:text-neutral-50">
        Orders
        <span
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
          className="relative"
        >
          <i className="fa-solid fa-circle-info text-neutral-500 ml-2"></i>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="z-20 absolute -top-10 left-10 w-64 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md p-4"
            >
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                This panel refreshes every minute. You do not need to refresh
                the page manually.
              </p>
            </motion.div>
          )}
        </span>
      </h1>
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-y-scroll max-h-[700px]">
        <div className="flex flex-row items-center">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 p-4 pr-1 w-fit">
            New orders ({Math.floor(Math.random() * 10)}){" "}
          </h2>
          {isOnline && (
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse inline-block"></div>
          )}
          {!isOnline && (
            <div className="w-4 h-4 bg-neutral-500 rounded-full inline-block"></div>
          )}
        </div>
        <div className="p-2">
          <Order />
        </div>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 p-4 pr-1 w-fit">
          Pending orders ({Math.floor(Math.random() * 10)}){" "}
        </h2>
        <div className="p-2">
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  );
}

export default Orders;
