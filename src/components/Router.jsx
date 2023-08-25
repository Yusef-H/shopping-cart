import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import App from "../App";



const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><App /></>,
      errorElement: <Error />
    },
    {
      path: "/:name",
      element: <App />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;