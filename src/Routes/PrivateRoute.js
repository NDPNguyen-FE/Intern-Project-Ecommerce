import React from "react";
import { Redirect } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";

function PrivateRoute(props) {
  const { isAuth, children } = props;
  if (!isAuth) return <Redirect to='/' />;
  return <AdminLayout>{children}</AdminLayout>;
}

export default PrivateRoute;
