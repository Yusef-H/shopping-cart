import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Store from "./Store";
import About from "./About";



const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/Store",
      element: <Store />,
    },
    {
      path: "/About",
      element: <About />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;