import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../../Store/store";
import {
  login,
  selectIsLoading,
  selectLoggedIn,
} from "../../../Features/login/loginSlice";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";

function LoginFormNav() {
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectLoggedIn);

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const remember = formData.get("remember") as string;
    const rememberUser = remember === "on" ? true : false;
    dispatch(login({ email, password, rememberUser }));
  }

  return (
    <div
      className="absolute top-full right-0 w-96 bg-neutral-100 rounded-b-lg rounded-tl-lg p-3 overflow-hidden"
      onClick={stopPropagation}
    >
      {isLoading && <LoadingAnimation />}
      <form
        className="flex flex-col space-y-1 text-lg"
        onClick={stopPropagation}
        onSubmit={handleLogin}
      >
        <label
          htmlFor="email"
          className="flex items-center space-x-2 font-bold"
        >
          Email <span className="material-symbols-outlined">mail</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@mail.com"
          className="appearance-none block w-full p-2 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
        />
        <label
          htmlFor="password"
          className="flex items-center space-x-2 font-bold"
        >
          Password <span className="material-symbols-outlined">key</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          className="appearance-none block w-full p-2 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
        />
        <div className="flex flex-row justify-between text-base">
          <div className="flex flex-row items-center space-x-2">
            <label htmlFor="remember" className="cursor-pointer">
              Remember me
            </label>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="rounded-md cursor-pointer"
            />
          </div>
          <Link to="/forgot-password" className="underline hover:no-underline">
            Forgot password?
          </Link>
        </div>
        <button
          id="login-button"
          type="submit"
          className="flex items-center justify-center bg-neutral-950 hover:bg-primary text-white rounded-md p-1 text-lg font-bold transition-all"
        >
          Login
          <span className="material-symbols-outlined">login</span>
        </button>
      </form>
      <div className="grid grid-cols-2 gap-2 mt-1">
        <button
          className="text-base font-bold border-2 border-neutral-950 hover:border-primary hover:bg-primary hover:text-neutral-50 rounded-lg p-1 transition-all"
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
          className="text-base font-bold border-2 border-neutral-950 hover:border-primary hover:bg-primary hover:text-neutral-50 rounded-lg p-1 transition-all"
          onClick={() => {
            const googleLoginWindow = window.open(
              "http://localhost:4000/auth/google",
              "Facebook Login",
              "width=500,height=600"
            );
            if (googleLoginWindow) {
              googleLoginWindow.onbeforeunload = () => {
                window.location.reload();
              };
            }
          }}
        >
          Facebook <i className="fa-brands fa-facebook"></i>
        </button>
      </div>
      <h1 className="text-lg font-black my-1 font-mono text-center">
        Don't have an account?{" "}
        <Link to="/register" className="underline hover:no-underline">
          Register
        </Link>
      </h1>
    </div>
  );
}

export default LoginFormNav;
