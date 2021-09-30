import { Spin } from "antd";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { adminRouter, userRouter } from "./constant/Route.js";
import PrivateRoute from "./Routes/PrivateRoute.js";
import PublicRoute from "./Routes/PublicRoute.js";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
        <Switch>
          {userRouter.map((user, index) => {
            const Component = user.component;
            return (
              <Route
                key={index}
                exact
                path={user.path}
                render={() => (
                  <PublicRoute isAuth={auth.isAuthenticated}>
                    <Component />
                  </PublicRoute>
                )}></Route>
            );
          })}

          {adminRouter.map((admin, index) => {
            const Component = admin.component;
            return (
              <Route
                exact
                key={index}
                path={admin.path}
                render={() => (
                  <PrivateRoute isAuth={auth.isAuthenticated}>
                    <Component />
                  </PrivateRoute>
                )}></Route>
            );
          })}

          {auth.isAuthenticated ? (
            <Redirect to='/admin' />
          ) : (
            <Redirect to='/' />
          )}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
