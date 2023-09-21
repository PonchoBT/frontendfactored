import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Header from "../layout/Header";

export default function Router() {
  let element = useRoutes([
    { path: "home", element: <div><Header/><Home/></div> },
    { path: "*", element: <Page404 /> },
    { path: "/", element: <Login /> },
  ]);
  return element;
}
