import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  checkLogin,
  logout,
  selectExp,
  selectLoggedIn,
} from "../Features/login/loginSlice";
import { AppDispatch } from "../Store/store";

function AuthVerify() {
  const dispatch = useDispatch<AppDispatch>();

  const location = useLocation();
  const exp = useSelector(selectExp);
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    dispatch(checkLogin());

    if (exp) {
      const expDate = new Date(exp * 1000);
      const now = new Date();
      if (expDate < now) {
        dispatch(logout());
      }
    }
  }, [location, exp, dispatch, isLoggedIn]);

  return <div></div>;
}

export default AuthVerify;
