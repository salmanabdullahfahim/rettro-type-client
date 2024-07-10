import App from "@/App";
import Dashboard from "@/components/Dashboard/Dashboard";
import Home from "@/components/Home/Home";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AboutUs from "@/Pages/AboutUs";
import ContactUs from "@/Pages/ContactUs";

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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
