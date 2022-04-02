import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, puplicRoutes } from "../routes";
import { APP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../App";

export const AppRouter = (props) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={APP_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {puplicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};
