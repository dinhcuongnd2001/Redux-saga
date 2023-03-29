import * as React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
export function PrivateRoute({ children }: any) {
  // check is login
  const isLogin = Boolean(localStorage.getItem("token"));
  return isLogin ? children : <Navigate to="/login" />;
}
