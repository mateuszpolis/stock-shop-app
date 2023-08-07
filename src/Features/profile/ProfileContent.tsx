import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { logout, selectLoggedIn, selectUser } from "../login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch } from "../../Store/store";
import ReactDOM from "react-dom";
import Backdrop from "../../Components/Backdrop";
import { Link } from "react-router-dom";

function ProfileContent() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="p-5 flex xl:w-[1280px]">
      <motion.div
        className="w-full rounded-lg flex flex-col space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-3xl dark:text-neutral-50 font-bold">
          Hi, {user.name}
        </h1>
        <div className="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
          <div className="bg-neutral-50 shadow-lg rounded-lg p-5 flex-grow flex flex-col justify-around xl:h-72">
            <h2 className="text-2xl font-semibold mb-4">Profile Details:</h2>
            <div className="flex flex-col space-y-1 mb-4">
              <div className="rounded-lg bg-neutral-50">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Name: <span className="font-normal text-sm">{user.name}</span>
                </h3>
                <h3 className="text-lg font-semibold text-neutral-950">
                  Surname:{" "}
                  <span className="font-normal text-sm">{user.surname}</span>
                </h3>
                <h3 className="text-lg font-semibold text-neutral-950">
                  Email:{" "}
                  <span className="font-normal text-sm">{user.email}</span>
                </h3>
                <h3 className="text-lg font-semibold text-neutral-950">
                  Password:{" "}
                  <span className="font-normal text-sm">********</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to="/profile/edit">
                <button className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all">
                  Edit <i className="fa-solid fa-user-pen"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-neutral-50 shadow-lg rounded-lg p-5 flex-grow flex flex-col justify-around xl:h-72">
            <h2 className="text-2xl font-semibold mb-4">Order history:</h2>
            <div className="flex flex-col space-y-1 mb-4">
              <div className="p-2 rounded-lg bg-neutral-50 shadow-md">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Order ID:{" "}
                  <span className="font-normal text-sm">123456789</span>
                </h3>
                <h3 className="text-lg font-semibold text-neutral-950">
                  Date: <span className="font-normal text-sm">12.12.2021</span>
                </h3>
                <h3 className="text-lg font-semibold text-neutral-950">
                  Status: <span className="font-normal text-sm">Delivered</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all">
                See more...<i className="fa-solid fa-clock-rotate-left"></i>
              </button>
            </div>
          </div>
          <div className="bg-neutral-50 shadow-lg rounded-lg p-5 flex-grow flex flex-col justify-around xl:h-72">
            <h2 className="text-2xl font-semibold mb-4">Addresses:</h2>
            <div className="flex flex-col space-y-1 mb-4">
              <div className="bg-neutral-50 rounded-lg p-2 shadow-md">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Home.{" "}
                  <span className="font-normal text-sm">
                    Poland, Częstochowa, ...
                  </span>
                </h3>
              </div>
              <div className="bg-neutral-50 rounded-lg p-2 shadow-md">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Company.{" "}
                  <span className="font-normal text-sm">
                    Poland, Warsaw, ...
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-white text-teal-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-all">
                Edit <i className="fa-solid fa-address-book"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setShowLogoutModal(true);
            }}
            className="w-full bg-white text-red-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all"
          >
            Log out <i className="fa-solid fa-user-slash"></i>
          </button>
          {ReactDOM.createPortal(
            <AnimatePresence initial={false} mode="wait">
              {showLogoutModal && (
                <Backdrop
                  onClick={() => {
                    setShowLogoutModal(false);
                  }}
                >
                  <motion.div
                    className="z-50 bg-neutral-50 rounded-lg shadow-lg p-4 h-36 sm:h-48 flex flex-col justify-around items-center w-[90%] max-w-[440px] dark:bg-neutral-900 dark:text-neutral-50"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                  >
                    <h1 className="text-3xl font-bold">Are you sure?</h1>
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={() => {
                          dispatch(logout());
                        }}
                        className="bg-white text-red-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all"
                      >
                        Yes <i className="fa-solid fa-user-slash"></i>
                      </button>
                      <button
                        onClick={() => {
                          setShowLogoutModal(false);
                        }}
                        className="bg-white text-green-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-all"
                      >
                        No <i className="fa-solid fa-user-check"></i>
                      </button>
                    </div>
                  </motion.div>
                </Backdrop>
              )}
            </AnimatePresence>,
            document.getElementById("root")!
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProfileContent;
