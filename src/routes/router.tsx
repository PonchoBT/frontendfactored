import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import SignIn from "../pages/Singup";

export default function Router() {
  let element = useRoutes([
    { path: "Home", element: <Home /> },
    { path: "sign", element: <SignIn /> },
    { path: "login", element: <Login /> },
    { path: "*", element: <Page404 /> },
  ]);
  return element;
}
