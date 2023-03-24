import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/Singup";
import Page404 from "../pages/Page404";
import Films from "../pages/Films";
import Header from "../layout/Header";

export default function Router() {
  let element = useRoutes([
    { path: "home", element: <div><Header/><Home /></div> },
    { path: "sign", element: <SignIn /> },
    { path: "*", element: <Page404 /> },
    { path: "films", element: <Films /> },
    { path: "/", element: <Login /> },
  ]);
  return element;
}
