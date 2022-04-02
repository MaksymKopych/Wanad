import React, { useContext, useEffect } from "react";
import { AddDay } from "./AddDay";
import { Switch, Route, NavLink } from "react-router-dom";
import { Calendar } from "./Calendar";
import { Area } from "./Area";
import { APP_ROUTE } from "../utils/consts";
import { BrowserRouter } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Context, getUsers } from "../App";
import db from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AppScreen() {
  const { auth, setData } = useContext(Context);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const promise = Promise.resolve(getUsers(db));
    promise.then(function (v) {
      v.map((el) => {
        if (el.id === user.uid) {
          setData(el);
          console.log(el);
        }
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app-content">
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-links">
              <NavLink className="link" to={`${APP_ROUTE}/area`}>
                New Location
              </NavLink>
            </li>
            <li className="menu-links">
              <NavLink className="link" to={`${APP_ROUTE}/add-day`}>
                Add Day
              </NavLink>
            </li>
            <li className="menu-links">
              <NavLink className="link" to={`${APP_ROUTE}/calendar`}>
                Calendar
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="contener">
          <Switch>
            <Route path={APP_ROUTE} component={Welcome} exact={true} />
            <Route path={`${APP_ROUTE}/area`} component={Area} exact={true} />
            <Route
              path={`${APP_ROUTE}/add-day`}
              component={AddDay}
              exact={true}
            />
            <Route
              path={`${APP_ROUTE}/calendar`}
              component={Calendar}
              exact={true}
            />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default AppScreen;
