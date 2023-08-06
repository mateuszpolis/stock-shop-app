import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../login/loginSlice";
import authService from "../../services/auth.service";

function ProfileEditContent() {
  const [showForm, setShowForm] = React.useState(false);

  const user = useSelector(selectUser);

  const [name, setName] = React.useState(user.name);
  const [surname, setSurname] = React.useState(user.surname);

  return (
    <div className="p-5 flex xl:w-[1280px] ">
      <motion.div
        className="w-full rounded-lg flex flex-col space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Link to="/profile">
          <i className="fa-solid fa-arrow-left text-2xl"></i>
        </Link>
        <h1 className="text-3xl font-bold">Update your information:</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <form
            className="relative flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              setShowForm(false);
              authService.editUserDetails(name, surname, user.email);
            }}
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-lg font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
              />
            </div>
            {showForm && (
              <motion.div
                className="flex justify-between space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
                >
                  Save
                </button>
              </motion.div>
            )}
            {!showForm && (
              <motion.div
                className="flex justify-between space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
                  onClick={() => setShowForm(true)}
                >
                  Edit
                </button>
              </motion.div>
            )}
            {!showForm && (
              <div className="absolute w-full h-[82%] cursor-not-allowed"></div>
            )}
          </form>
        </motion.div>
        <button className="bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all">
          Change password <i className="fa-solid fa-key"></i>
        </button>
      </motion.div>
    </div>
  );
}

export default ProfileEditContent;
