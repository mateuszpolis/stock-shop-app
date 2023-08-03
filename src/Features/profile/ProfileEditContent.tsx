import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {};

function ProfileEditContent({}: Props) {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="p-5 flex xl:w-[1280px] ">
      <motion.div
        className="w-full p-3 shadow-lg rounded-lg flex flex-col space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-3xl font-bold">Update your information:</h1>
        <AnimatePresence initial={false} mode="wait">
          {!showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-lg bg-neutral-950 text-neutral-50 p-3 flex flex-col"
            >
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-lg font-semibold">
                  Name:
                </label>
                <p className="text-lg">Mateusz</p>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="surname" className="text-lg font-semibold">
                  Surname:
                </label>
                <p className="text-lg">Kubicki</p>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-lg font-semibold">
                  Email:
                </label>
                <p className="text-lg">polismateusz@gmail.com </p>
              </div>
              <button
                className="bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
                onClick={() => setShowForm(true)}
              >
                Edit
              </button>
            </motion.div>
          )}
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <form className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-lg font-semibold">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value="Mateusz"
                    className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="surname" className="text-lg font-semibold">
                    Surname:
                  </label>
                  <input
                    type="text"
                    name="surname"
                    className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-lg font-semibold">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <button
                    className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all">
                    Save
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        <button className="bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all">
          Change password <i className="fa-solid fa-key"></i>
        </button>
      </motion.div>
    </div>
  );
}

export default ProfileEditContent;
