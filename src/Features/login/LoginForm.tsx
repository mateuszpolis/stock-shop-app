import React from "react";
import SideShortcuts from "../../Components/SideShortcuts";

function LoginForm() {
  const [email, setEmail] = React.useState("");

  function isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="p-5 lg:flex lg:flex-row">
      <div className="flex flex-col lg:p-2 lg:w-1/2">
        <h1 className="text-2xl font-black font-mono text-center dark:text-neutral-50">
          Login with your StockShop account:
        </h1>
        <form className="flex flex-col space-y-2 border-y-2 border-neutral-200 dark:border-neutral-500 rounded-lg p-2 dark:text-neutral-50">
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
              if (isEmailValid(email)) {
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
        <div className="flex flex-row justify-center space-x-2 border-y-2 border-neutral-200 dark:border-neutral-500 rounded-lg p-2">
          <button className="bg-neutral-950 hover:bg-neutral-800 text-white rounded-md p-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200">
            Google
          </button>
          <button className="bg-neutral-950 hover:bg-neutral-800 text-white rounded-md p-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200">
            Facebook
          </button>
        </div>
        <h1 className="text-xl font-black my-1 font-mono text-center dark:text-neutral-50">
          Don't have an account?{" "}
          <a href="/register" className="underline hover:no-underline">
            Register
          </a>
        </h1>
      </div>
      <SideShortcuts />
    </div>
  );
}

export default LoginForm;
