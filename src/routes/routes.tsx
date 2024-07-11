import App from "@/App";
import AddProduct from "@/components/Dashboard/AddProduct/AddProduct";
import { AllProducts } from "@/components/Dashboard/AllProducts/AllProducts";
import Dashboard from "@/components/Dashboard/Dashboard";
import Home from "@/components/Home/Home";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AboutUs from "@/Pages/AboutUs";
import AllProductPage from "@/Pages/AllProductPage";
import ContactUs from "@/Pages/ContactUs";
import { ProductDetails } from "@/Pages/ProductDetails";

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
      {
        path: "/products",
        element: <AllProductPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
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
      {
        path: "all-products",
        element: <AllProducts />,
      },

      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
