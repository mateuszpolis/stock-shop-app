import React from "react";
import RegisterForm from "./RegisterForm";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Register() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  return (
    <div className="p-2 flex flex-row justify-center my-2 relative">
      <motion.div
        className="flex flex-col rounded-lg shadow-lg p-3 py-20 w-full md:w-[650px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-2xl font-black font-mono text-center dark:text-neutral-50">
          Create an account:
        </h1>
        <div className="flex flex-col space-y-2">
          <button
            className="bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg p-3 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            Using your email
          </button>
          <AnimatePresence initial={false} mode="wait">
            {isFormOpen && (
              <motion.div
                initial={{ height: "0%", opacity: 0, overflow: "hidden" }}
                animate={{ height: "100%", opacity: 1, overflow: "visible" }}
                exit={{ height: "0%", opacity: 0, overflow: "hidden" }}
              >
                <RegisterForm />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="border-2 dark:border-neutral-50 dark:bg-neutral-900 border-neutral-950 bg-neutral-50 hover:bg-neutral-950 hover:text-neutral-50 rounded-lg p-3 dark:text-neutral-50 dark:hover:bg-neutral-50 hover:dark:text-neutral-950 transition-all"
              onClick={() => {
                const googleLoginWindow = window.open(
                  "http://localhost:4000/auth/google",
                  "Google Login",
                  "width=500,height=600"
                );
                if (googleLoginWindow) {
                  googleLoginWindow.onbeforeunload = () => {
                    window.location.reload();
                  };
                }
              }}
            >
              Google <i className="fa-brands fa-google"></i>
            </button>
            <button
              className="border-2 dark:border-neutral-50 dark:bg-neutral-900 border-neutral-950 bg-neutral-50 hover:bg-neutral-950 hover:text-neutral-50 rounded-lg p-3 dark:text-neutral-50 dark:hover:bg-neutral-50 hover:dark:text-neutral-950 transition-all"
              onClick={() => {
                const githubLoginWindow = window.open(
                  "http://localhost:4000/auth/facebook",
                  "Facebook Login",
                  "width=500,height=600"
                );
                if (githubLoginWindow) {
                  githubLoginWindow.onbeforeunload = () => {
                    window.location.reload();
                  };
                }
              }}
            >
              Facebook <i className="fa-brands fa-facebook"></i>
            </button>
          </div>
        </div>
        <h1 className="text-xl font-black my-1 font-mono text-center dark:text-neutral-50">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:no-underline">
            Login
          </Link>
        </h1>
      </motion.div>
    </div>
  );
}

export default Register;
