import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import Navbar from "./Navbar";
import { Outlet} from "react-router-dom";



const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Outlet/></>,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "Store",
          element: <Store />
        },
        {
          path: "About",
          element: <About />
        }
      ]
    },

  ]);

  return <RouterProvider router={router} />;
};

export default Router;