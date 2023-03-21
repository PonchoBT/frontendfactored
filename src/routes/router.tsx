import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";


export default function Router() {
let element = useRoutes([


            { path: "home", element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "*", element: <Page404 /> },
         

        
]);
return element;
}