import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = React.useState("");

  function isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="p-2 flex flex-row justify-center my-2">
      <motion.div
        className="flex flex-col rounded-lg shadow-lg p-3 w-full md:w-[650px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-2xl my-4 font-black font-mono text-center dark:text-neutral-50">
          Login with your StockShop account:
        </h1>
        <form className="flex flex-col space-y-2 border-neutral-200 dark:border-neutral-500 rounded-lg dark:text-neutral-50">
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required={true}
            onChange={(e) => {
              const newEmail = e.target.value;
              setEmail(newEmail);
              const input = document.getElementById("email");
              const loginButton = document.getElementById("login-button");
              if (isEmailValid(newEmail)) {
                if (input) {
                  input.classList.remove("border-red-500");
                  input.classList.remove("dark:border-red-500");
                  input.classList.add("border-green-500");
                  input.classList.add("dark:border-green-500");
                  input.classList.remove("bg-red-100");
                  loginButton?.classList.remove("cursor-not-allowed");
                }
              } else {
                if (input) {
                  input.classList.add("border-red-500");
                  input.classList.add("dark:border-red-500");
                  input.classList.add("bg-red-100");
                  input.classList.remove("border-green-500");
                  input.classList.remove("dark:border-green-500");
                  loginButton?.classList.add("cursor-not-allowed");
                }
              }
            }}
            placeholder="yourmail@example.com"
            className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
          />
          <label className="text-xl" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            required={true}
            className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
          />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="rounded-md"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link
              to="/forgot-password"
              className="underline hover:no-underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            id="login-button"
            type="submit"
            className="bg-neutral-950 hover:bg-neutral-800 text-white rounded-md p-3 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
          >
            Login
          </button>
        </form>
        <h1 className="text-2xl my-1 font-black font-mono text-center dark:text-neutral-50">
          or through:
        </h1>
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
        <h1 className="text-xl font-black my-1 font-mono text-center dark:text-neutral-50">
          Don't have an account?{" "}
          <Link to="/register" className="underline hover:no-underline">
            Register
          </Link>
        </h1>
      </motion.div>
    </div>
  );
}

export default LoginForm;
