import App from "@/App";
import Home from "@/components/Home/Home";
import AboutUs from "@/Pages/AboutUs";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
