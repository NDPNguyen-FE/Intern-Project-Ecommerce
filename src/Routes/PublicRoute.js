import React from "react";
import UserLayout from "../Layout/UserLayout";
import { Redirect } from "react-router-dom";

function PublicRoute(props) {
  const { isAuth, children } = props;
  if (isAuth) return <Redirect to='/admin' />;
  return <UserLayout>{children}</UserLayout>;
}

export default PublicRoute;
