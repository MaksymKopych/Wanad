import AppScreen from "./components/AppScreen";
import { LoginScreen } from "./components/LoginScreen";
import { APP_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const puplicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginScreen,
  },
];
export const privateRoutes = [
  {
    path: APP_ROUTE,
    Component: AppScreen,
  },
];
