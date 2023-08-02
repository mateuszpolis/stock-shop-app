import React, { useEffect } from "react";
import {
  registerUserAsync,
  selectError,
  selectIsLoading,
  selectIsRegistered,
} from "./registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { useNavigate } from "react-router";

type passwordCheck = {
  message: string;
  isValid: boolean;
};

function RegisterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const registered = useSelector(selectIsRegistered);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("name") as string;
    const lastName = formData.get("surname") as string;
    dispatch(registerUserAsync({ firstName, lastName, email, password }));
  }

  function isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function checkPasswordStrength(password: string): passwordCheck {
    const minLength = 8;

    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const digitsRegex = /[0-9]/;
    const specialCharsRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/;

    if (password.length < minLength) {
      return {
        message: "Password must be at least 8 characters long.",
        isValid: false,
      };
    }

    if (!upperCaseRegex.test(password)) {
      return {
        message: "Password must contain at least one uppercase letter.",
        isValid: false,
      };
    }

    if (!lowerCaseRegex.test(password)) {
      return {
        message: "Password must contain at least one lowercase letter.",
        isValid: false,
      };
    }

    if (!digitsRegex.test(password)) {
      return {
        message: "Password must contain at least one digit.",
        isValid: false,
      };
    }

    if (!specialCharsRegex.test(password)) {
      return {
        message: "Password must contain at least one special character",
        isValid: false,
      };
    }

    return {
      message: "Password is strong.",
      isValid: true,
    };
  }

  useEffect(() => {
    if (registered) {
      navigate("/login");
    }
  }, [registered, navigate]);

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col space-y-2 dark:text-neutral-50"
        onSubmit={handleRegister}
      >
        <label className="text-xl" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required={true}
          placeholder="John"
          className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
        />
        <label className="text-xl" htmlFor="surname">
          Surname
        </label>
        <input
          type="text"
          name="surname"
          id="surname"
          required={true}
          placeholder="Doe"
          className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
        />
        <label className="text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required={true}
          placeholder="yourmail@example.com"
          className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
          onChange={(e) => {
            const newEmail = e.target.value;
            setEmail(newEmail);
            const input = document.getElementById("email");
            const loginButton = document.getElementById("login-button");
            if (isEmailValid(newEmail)) {
              if (input) {
                input.classList.remove("border-red-500");
                input.classList.remove("dark:border-red-500");
                input.classList.remove("bg-red-100");
                input.classList.add("border-neutral-950");
                input.classList.add("dark:border-neutral-50");
                loginButton?.classList.remove("cursor-not-allowed");
              }
            } else {
              if (input) {
                input.classList.add("border-red-500");
                input.classList.add("dark:border-red-500");
                input.classList.add("bg-red-100");
                input.classList.remove("border-neutral-950");
                input.classList.remove("dark:border-neutral-50");
                loginButton?.classList.add("cursor-not-allowed");
              }
            }
          }}
        />
        <label className="text-xl" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required={true}
          value={password}
          placeholder="********"
          className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
          onChange={(e) => {
            const newPassword = e.target.value;
            setPassword(newPassword);
            const input = document.getElementById("password");
            const loginButton = document.getElementById("login-button");
            if (checkPasswordStrength(newPassword).isValid) {
              if (input) {
                input.classList.remove("border-red-500");
                input.classList.remove("dark:border-red-500");
                input.classList.remove("bg-red-100");
                input.classList.add("border-neutral-950");
                input.classList.add("dark:border-neutral-50");
                loginButton?.classList.remove("cursor-not-allowed");
              }
            } else {
              if (input) {
                input.classList.add("border-red-500");
                input.classList.add("dark:border-red-500");
                input.classList.add("bg-red-100");
                input.classList.remove("border-neutral-950");
                input.classList.remove("dark:border-neutral-50");
                loginButton?.classList.add("cursor-not-allowed");
              }
            }
          }}
        />
        <div>{checkPasswordStrength(password).message}</div>
        <label className="text-xl" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          required={true}
          onChange={(e) => {
            const newPassword = e.target.value;
            const input = document.getElementById("confirm-password");
            const loginButton = document.getElementById("login-button");
            if (newPassword === password) {
              if (input) {
                input.classList.remove("border-red-500");
                input.classList.remove("dark:border-red-500");
                input.classList.remove("bg-red-100");
                input.classList.add("border-neutral-950");
                input.classList.add("dark:border-neutral-50");
                loginButton?.classList.remove("cursor-not-allowed");
              }
            } else {
              if (input) {
                input.classList.add("border-red-500");
                input.classList.add("dark:border-red-500");
                input.classList.add("bg-red-100");
                input.classList.remove("border-neutral-950");
                input.classList.remove("dark:border-neutral-50");
                loginButton?.classList.add("cursor-not-allowed");
              }
            }
          }}
          placeholder="********"
          className="appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
        />
        <div className="flex flex-col justify-between space-y-1">
          <div className="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="rounded-md"
            />
            <label htmlFor="terms">
              I accept the{" "}
              <a href="/" className="underline hover:no-underline font-bold">
                Terms and Conditions
              </a>
            </label>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              className="rounded-md"
            />
            <label htmlFor="newsletter">Subscribe to newsletter</label>
          </div>
        </div>
        <button
          id="login-button"
          type="submit"
          className="bg-neutral-950 hover:bg-neutral-800 text-white rounded-md p-3 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
